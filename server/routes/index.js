const express = require('express')
const router = express.Router()
const xmlParser = require('xml2json')
const fs = require('fs')

/* GET home page. */
router.get('/', function (req, res, next) {
  const xml = fs.readFileSync('./saft.xml', 'utf8')
  const result = xmlParser.toJson(xml)
  res.json(JSON.parse(result))
})

module.exports = router
