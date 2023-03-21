const express = require('express')
const router = express.Router()
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controllers/autos')


/**
 * @swagger
 * components:
 *  schemas:
 *    autosapi:
 *      type: object
 *      properties:
 *         img_url:
 *           type: string
 *           description: img
 *         brand:
 *           type: string
 *           description: brand name
 *         age:
 *           type: number
 *           description: year of production
 *         model:
 *           type: string
 *           description: model of each car
 *         country:
 *           type: string
 *           description: Country where the brand was founded
 *         description:
 *           type: string
 *           description: overview of each car
 */

/**
 * @swagger
 * /:
 *  get:
 *    sumary: return all autos
 *    tags: [autosapi]
 *    responses:
 *      200:
 *        description: all autos!
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                 $ref: '#/components/schemas/autosapi'
 */
router.get('/' , getItems)
/**
 * @swagger
 * /{id}:
 *  get:
 *    sumary: return one autos
 *    tags: [autosapi]
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *        required: true
 *        description: the user id
 *    responses:
 *      200:
 *        description: one create autos!
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                 $ref: '#/components/schemas/autosapi'
 *      400:
 *       description: user not found!
 */
router.get('/:id', getItem)

/**
 * @swagger
 * /:
 *  post:
 *    sumary: create a new auto
 *    tags: [autosapi]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *          type: object
 *          $ref: '#/components/schemas/autosapi'
 *    responses:
 *      200:
 *        description: nuevo auto creado!
 */
router.post('/', createItem)



/**
 * @swagger
 * /{id}:
 *  patch:
 *    sumary: update one pays
 *    tags: [autosapi]
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *        required: true
 *        description: the user id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *          type: object
 *          $ref: '#/components/schemas/autosapi'
 *    responses:
 *      200:
 *        description: pay update!
 */
router.patch('/:id', updateItem)
/**
 * @swagger
 * /{id}:
 *  delete:
 *    sumary: return one autos
 *    tags: [autosapi]
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *        required: true
 *        description: the user id
 *    responses:
 *      200:
 *        description: pay update!
 */
router.delete('/:id', deleteItem)

module.exports = router