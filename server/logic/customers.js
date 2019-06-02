'use strict'
const path = require('path')
const saft = path.join(__dirname.substring(0, __dirname.lastIndexOf('/')), 'saft.xml')
const fs = require('fs')
const xmlParser = require('xml2json')

const customers = () => {
  const xml = fs.readFileSync(saft, 'utf8')
  const result = xmlParser.toJson(xml)
  const { AuditFile: { MasterFiles: { Customer } } } = JSON.parse(result)
  return Customer
}

const byId = (id) => {
  const customers = this.customers()
  const customer = customers.filter((item) => {
    return item.CustomerID === id
  })
  return customer[0]
}

const salesStats = (Journals, Accounts) => {
  const sales = this.sales(Journals)

}

module.exports.customers = customers
module.exports.byId = byId
