const express = require("express")
const router = express.Router()
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controlles/autos')

router.get('/', checkOrigin,  getItems)

router.get('/:id', checkOrigin,getItem)

router.post('/', checkOrigin,createItem)

router.patch('/:id', updateItem)

router.delete('/:id', deleteItem)

module.exports = router