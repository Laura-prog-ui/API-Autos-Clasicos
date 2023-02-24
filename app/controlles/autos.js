const { httpError } = require('../helpers/handleError')
const userModel = require('../models/autos')

const getItems = async (req, res) => {
    try{
        const listAll = await userModel.find({})
        res.send({ data: listAll })
    } catch (e) {
        httpError(res, e)
    }
}

const getItem = () => {

}

    const createItem = async (req, res) => {
        try {
            const { image_url, brand, age, model, country } = req.body
            const resDetail = await userModel.create({
                image_url, brand, age, model, country
            })
            res.send({ data: resDetail })
        } catch (e) {
            httpError(res, e)
        }
    }


const updateItem = () => {

}

const deleteItem = () => {

}


module.exports = { getItem, getItems, deleteItem, createItem, updateItem }