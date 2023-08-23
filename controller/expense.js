const ExpenseDetail = require('../model/database')
exports.getAllDetails=((req,res,next)=>{
    ExpenseDetail.findAll()
    .then(users=>{
        res.json({users})
    }).catch(err=>console.log(err))
})
exports.getDetail = ((req,res,next)=>{
    const userId = req.params.userId
    ExpenseDetail.findByPk(userId).then(response=>{
        res.json({response})
    }).catch(err=>console.log(err))
})
exports.postDetails = ((req,res,next)=>{
    const jsonData = req.body
    ExpenseDetail.create({expense:jsonData.expense,description:jsonData.description,category:jsonData.category})
    .then(r=>res.json({r}))
    .catch(err=>console.log(err))
})
exports.deleteUser = ((req,res,next)=>{
    const userId = req.params.userId
    ExpenseDetail.destroy({where:{id:userId}})
    .then(response=>{
        res.json({response})
    }).catch(err=>console.log(err))
})