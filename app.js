const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const expense = require('./router/expense')

const app = express()
app.use(cors())
const sequelize = require('./util/database')

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());

app.use('/api/v1/expense',expense)

sequelize.sync().then(res=>{
    app.listen(3000)
}).catch(err=>console.log(err))