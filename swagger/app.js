
const express = require('express')

const app = express()
app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH, OPTIONS')
    next()
})
app.use(express.static('swagger-docs'))
app.listen(80, () => { console.log("swagger doc serve listening on 80") })

