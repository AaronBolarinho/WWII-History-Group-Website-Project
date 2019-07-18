const express = require('express')
const app = express()
// const morgan = require('morgan')
// const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./public'))
app.use(cors())
// app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'))
// app.use(morgan('short'))

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', [])
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.append('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

// These are all my routes
const router = require('./serverRoutes/serverRoutesTestFile.js')
// const router1 = require('./routes/recruitEquipmentRoutes.js')
// const router2 = require('./routes/scholarEquipmentRoutes.js')

app.use(router)
// app.use(router1)
// app.use(router2)
// ----------------------------------

// This is my functon to connect to the AEMMA Database
// function getConnection() {
//   return mysql.createConnection({
//     host: 'localhost',
//     user: 'aaron',
//     password: 'Starwars1',
//     database: 'AEMMA_database_2016'
//   })
// }
// -------------------------------------

app.get('/', (req, res) => {
  console.log('Responding to root route')
  res.send('Helloooo from route')
})

// localhost:3002
app.listen(3002, () => {
  console.log('Server is up an listening on port 3002...')
})
