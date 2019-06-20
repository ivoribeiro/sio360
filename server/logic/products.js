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

const productsSales = () => {
  const products = all()
  let salesPerProducts = {}
  products.map((product) => {
    if (salesPerProducts[product.ProductCode] === undefined) {
      salesPerProducts[product.ProductCode] = 0
    }
    salesPerProducts[product.ProductCode] = (parseInt(product.InitialStock) + parseInt(product.ExtraStock)) - parseInt(product.CurrentStock)
    return product
  })
  return { sales: Object.values(salesPerProducts), products: Object.keys(salesPerProducts) }
}

module.exports.products = all
module.exports.productsSales = productsSales
