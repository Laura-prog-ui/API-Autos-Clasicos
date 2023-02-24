const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')

const patchRouter = '${_dirname}'

const removeExtension = (fiename) => {
    return fileName.splint('.').shift()
}

fs.readdirSync(pathRouter).filter((file) => {
    const fileWithOutExt = removeExtension(file)
    const skip =['index'].includes(fileWithOutExt)
    if (!skip) {
        router.use('${fileWithOutExt}', require('./${fileWithOutExt}')) //TODO:localhost/autos
        console.log('CARGAR RUTA ---->', fileWithOutExt)
    }

})

router.get('*', (req, res) => {
    res.status(404)
    res.send({ error: 'Not found' })
})

module.exports = router