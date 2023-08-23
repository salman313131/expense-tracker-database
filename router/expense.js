const express = require('express')
const router = express.Router()
const expenseController = require('../controller/expense')

router.get('/',expenseController.getAllDetails)
router.post('/add',expenseController.postDetails)
router.delete('/:userId',expenseController.deleteUser)
router.get('/:userId',expenseController.getDetail)

module.exports = router