"use strict";

// Dependencies
const expressFavicon = require("express-favicon")
const express = require("express")
const helmet = require("helmet")
const path = require("path")

// Variables
const web = express()
const port = process.env.PORT || 8080

/// Configurations
// Express
web.use(helmet({ contentSecurityPolicy: false }))
web.use(expressFavicon(path.resolve("public", "resources", "images", "favicon.png")))

// Main
web.use(express.static(path.resolve(__dirname, "public")))

web.listen(port, ()=>{
    console.log(`Server is running. Port: ${port}`)
})