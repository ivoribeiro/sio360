'use strict'
const path = require('path')
const saft = path.join(__dirname.substring(0, __dirname.lastIndexOf('/')), 'saft.xml')
const fs = require('fs')
const xmlParser = require('xml2json')

const getAll = () => {
  const xml = fs.readFileSync(saft, 'utf8')
  const result = xmlParser.toJson(xml)
  const { AuditFile: { MasterFiles: { Supplier } } } = JSON.parse(result)
  return Supplier
}

const byId = (id) => {
  const all = getAll()
  const filtered = all.filter((item) => {
    return item.SupplierID === id
  })
  return filtered[0]
}

const salesStats = (Journals, Accounts) => {
  const sales = this.sales(Journals)

}

module.exports.suppliers = getAll
module.exports.byId = byId
