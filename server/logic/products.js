'use strict'
const path = require('path')
const saft = path.join(__dirname.substring(0, __dirname.lastIndexOf('/')), 'saft.xml')
const fs = require('fs')
const xmlParser = require('xml2json')

const all = () => {
  const xml = fs.readFileSync(saft, 'utf8')
  const result = xmlParser.toJson(xml)
  const { AuditFile: { MasterFiles: { Product } } } = JSON.parse(result)
  if (!Array.isArray(Product)) {
    return [Product]
  }
  return Product
}

module.exports.products = all
