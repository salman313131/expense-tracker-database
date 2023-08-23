const myForm = document.getElementById('myForm')
const items = document.getElementById('items')
const expense = document.getElementById('expenseAmount')
const desc = document.getElementById('description')
const category = document.getElementById('category')
myForm.addEventListener('submit',onSubmit)
items.addEventListener('click',onDelete)
const showAll = async() =>{
    while(items.firstChild){
        items.removeChild(items.firstChild)
    }
    try {
        const response = await axios.get('/api/v1/expense')
        const user = response.data.users
        for (i=0;i<user.length;i++){
            showOutput(user[i])
        }
    } catch (error) {
        console.log(error)
    }
}

async function onSubmit(e){
    e.preventDefault()
    const data = {expense:expense.value,description:desc.value,category:category.value}
    try {
        await axios.post('/api/v1/expense/add',data)
        showAll()
    } catch (error) {
        console.log(error)
    }
    expense.value=''
    desc.value=''
    category.value=''
}

function showOutput(user){
    const item = document.getElementById('items')
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(`${user.expense} - ${user.description} - ${user.category} `))
    const delBtn = document.createElement('button')
    delBtn.textContent = 'delete'
    delBtn.classList.add('delete')
    delBtn.dataset.id = user.id
    const editBtn = document.createElement('button')
    editBtn.textContent = 'edit'
    editBtn.classList.add('edit')
    editBtn.dataset.id = user.id
    li.appendChild(editBtn)
    li.appendChild(delBtn)
    item.appendChild(li)
}
document.addEventListener('DOMContentLoaded',showAll)

async function onDelete (e){
    if(e.target.classList.contains('delete')){
        try {
            const id = e.target.dataset.id
            await axios.delete(`/api/v1/expense/${id}`)
            showAll()
        } catch (error) {
            console.log(error)
        }
    }
    if(e.target.classList.contains('edit')){
        try {
            const id = e.target.dataset.id
            const editUser = await axios.get(`api/v1/expense/${id}`)
            const userdetail = editUser.data.response
            expense.value = userdetail.expense
            desc.value = userdetail.description
            category.value = userdetail.category
            await axios.delete(`api/v1/expense/${userdetail.id}`)
            showAll()
        } catch (error) {
            console.log(error)
        }
    }
}