const express = require('express')
const router = express.Router()

// const fs = require('fs')
// const readline = require('readline')
// const { google } = require('googleapis')
const request = require('request')


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

// this is my google api test code

router.get('/test', (req, res) => {
  const myObject = {
    test: 'did it work?'
  }
  // res.render('test')
  res.json(myObject)
})

// const axios = require('axios')
// 
// axios.all([
//   axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2017-08-03'),
//   axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2017-08-02')
// ]).then(axios.spread((response1, response2) => {
//   console.log(response1.data.url)
//   console.log(response2.data.url)
// })).catch(error => {
//   console.log(error)
// })

//

router.get('/test2', (req, res) => {
  const options = { method: 'GET',
    url: 'https://api.imgur.com/3/account/me/images',
    headers:
   { 'Postman-Token': '8daf2c24-8326-400b-a7ab-929ca6245eb8',
     'cache-control': 'no-cache',
     Authorization: 'Bearer 53102d64c05303de3544d0ebb50e689d681974a3' } }

  request(options, function (error, response, body) {
    if (error) throw new Error(error)

    // this is test code
    // console.log('this is my response', body)
    const myVariable = JSON.parse(body)
    // this is what I want
    // console.log('this is my test:', myVariable.data[0].link)
    	res.json(myVariable)
  })
})



module.exports = router
