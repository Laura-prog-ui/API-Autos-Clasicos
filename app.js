require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const path = require("path")
const { dbConnect } = require('./config/mongo')
const PORT = process.env.PORT || 3030

//swagger
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerSpec ={ //inicio de swagger
  definition:{
    openapi: "3.0.0",
    info:{
      title:"autos API",
      version: "1.0"
    },
    servers:[
      {
        url: "https://apiautos.onrender.com/api/1.0/autos"
      }
    ]
  },
  apis:[`${path.join(__dirname, "./app/routes/autos.js")}`] //rutas
}

app.use(cors())
app.use(express.json())
app.use('/api/1.0', require('./app/routes'))
app.use('/api-doc', swaggerUI.serve , swaggerUI.setup(swaggerJsDoc(swaggerSpec))) //ruta de la documentacion

dbConnect()
app.listen(PORT, () => {
    console.log('API lista por el puerto ', PORT)
})