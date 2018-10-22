// Pull In Required Dependencies
const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')

// Configure The Express Application
const app = express()
var PORT = process.env.PORT || 3000

// Add Public Library
app.use(express.static(path.join(__dirname, './app/pubilc')))

// Add Middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

// Add Routes
require(path.join(__dirname, './app/routing/apiRoutes'))
require(path.join(__dirname, './app/routing/htmlRoutes'))

// Start Listening On PORT
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))