const express = require('express')
const router = express.Router()
const request = require('request')

// unused middleware---------------
// const fs = require('fs')
// const readline = require('readline')
// const { google } = require('googleapis')
// const exphpb = require('express-handlebars')
// const nodemailer = require('nodemailer')
// const path = require('path')
// unused middleware---------------

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

// this is my google api test code

router.get('/test', (req, res) => {
  const myObject = {
    test: 'did it work?'
  }
  // res.render('test')
  res.json(myObject)
})

router.get('/test2', (req, res) => {
  const options = { method: 'GET',
    url: 'https://api.imgur.com/3/account/me/images',
    headers:
   { Authorization: 'Bearer ce84d393917bf0578b929b1706f3c209d9c496f1' } }

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
