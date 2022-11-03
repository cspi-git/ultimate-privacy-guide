"use strict";

// Dependencies
const express = require("express")
const helmet = require("helmet")
const path = require("path")

// Variables
const web = express()
const port = process.env.PORT || 8080

/// Configurations
// Express
web.use(helmet({ contentSecurityPolicy: false }))

// Main
web.use(express.static(path.join(__dirname, "public")))
web.listen(port, ()=>console.log(`Server is running. Port: ${port}`))