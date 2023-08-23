const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const ExpenseDetail = sequelize.define('expense-app',{
    id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    expense:{
      type: Sequelize.DOUBLE
    },
    description:{
      type: Sequelize.STRING,
      allowNull: false
    },
    category:{
      type: Sequelize.STRING,
      allowNull: false
    }
})

module.exports = ExpenseDetail