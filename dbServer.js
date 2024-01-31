require("dotenv").config()

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE = process.env.DB_DATABASE
const DB_PORT = process.env.DB_PORT

const db = mysql.createPool({
   connectionLimit: 100,
   host: DB_HOST,
   user: DB_USER,
   password: DB_PASSWORD,
   database: DB_DATABASE,
   port: DB_PORT
})
//remember to include .env in .gitignore file


// const express = require("express")
// const app = express()
// const mysql = require("mysql")

// const db = mysql.createPool({
//    connectionLimit: 100,
//    host: "127.0.0.1",       //This is your localhost IP
//    user: "root",         // "newuser" created in Step 1(e)
//    password: "",  // password for the new user
//    database: "node_login_reg",      // Database name
//    port: "3306"             // port name, "3306" by default
// })

db.getConnection( (err, connection)=> {
   if (err) throw (err)
   console.log ("DB connected successful: " + connection.threadId)
})

const port = process.env.PORT
app.listen(port, 
()=> console.log(`Server Started on port ${port}...`))