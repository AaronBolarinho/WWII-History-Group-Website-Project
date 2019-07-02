const express = require('express')
// const mysql = require('mysql')
const router = express.Router()
// const exphpb = require('express-handlebars')
// const nodemailer = require('nodemailer')
// const path = require('path')

// This is my functon to connect to the AEMMA Database
// function getConnection() {
//   const pool = mysql.createPool({
//     connectionLimit: 10,
//     host: 'localhost',
//     user: 'aaron',
//     password: 'Starwars1',
//     database: 'AEMMA_database_2016'
//   })
// 
//   return pool
// }
// -------------------------------------

// This is my functon to connect to the AEMMA Database
// const connection = getConnection()

// ----These Functions below are for Conventional Shoes

// router1.get('/conventionalShoesProducts', (req, res) => {
//   const queryString = 'SELECT * FROM Recruit_Equip_Conventional_Shoes'
//   connection.query(queryString, (err, rows, fields) => {
//     if (err) {
//       console.log('failed to get data' + err)
//       res.sendStatus(500)
//       return
//     }
//     res.json(rows)
//   })
// })

module.exports = router
