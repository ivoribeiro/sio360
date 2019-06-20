const express = require('express')
const router = express.Router()
const xmlParser = require('xml2json')
const fs = require('fs')
const Journal = require('../logic/journal')
const Sales = require('../logic/sales')
const Purchases = require('../logic/purchases')
const Accounts = require('../logic/accounts')
const Customers = require('../logic/customers')
const Suppliers = require('../logic/suppliers')
const Products = require('../logic/products')
const path = require('path')
const saft = path.join(__dirname.substring(0, __dirname.lastIndexOf('/')), 'saft.xml')
/* GET home page. */
router.get('/', function (req, res, next) {
  const xml = fs.readFileSync(saft, 'utf8')
  const result = xmlParser.toJson(xml)
  res.json(JSON.parse(result))
})

router.get('/company', function (req, res, next) {
  const xml = fs.readFileSync(saft, 'utf8')
  const result = xmlParser.toJson(xml)
  const { AuditFile: { Header } } = JSON.parse(result)
  res.json(Header)
})

router.get('/company/accounts', function (req, res, next) {
  const accounts = Accounts.accounts()
  res.json(accounts)
})

router.get('/company/accounts/:accountId', function (req, res, next) {
  const byAccount = Accounts.byAccount(req.params.accountId)
  res.json(byAccount)
})

router.get('/company/customers', function (req, res, next) {
  const customers = Customers.customers()
  res.json(customers)
})

router.get('/company/customers/:customerId', function (req, res, next) {
  const customer = Customers.byId(req.params.customerId)
  res.json(customer)
})

router.get('/company/suppliers', function (req, res, next) {
  const suppliers = Suppliers.suppliers()
  res.json(suppliers)
})

router.get('/company/suppliers/:supplierId', function (req, res, next) {
  const supplier = Suppliers.byId(req.params.supplierId)
  res.json(supplier)
})

router.get('/company/journals', function (req, res, next) {
  const journals = Journal.journals()
  res.json(journals)
})

router.get('/company/journals/:journalId', function (req, res, next) {
  const journal = Journal.journal(req.params.journalId)
  res.json(journal)
})

router.get('/company/journals/:journalId/transactions', function (req, res, next) {
  const transactions = Journal.journalTransactions(req.params.journalId)
  res.json(transactions)
})

router.get('/company/products', function (req, res, next) {
  const products = Products.products(Journal)
  res.json(products)
})

router.get('/company/sales', function (req, res, next) {
  const sales = Sales.sales(Journal, Customers)
  res.json(sales)
})

router.get('/company/sales/byRevenue', function (req, res, next) {
  const sales = Sales.salesByRevenue(Journal, Customers)
  res.json(sales)
})

router.get('/company/sales/stats', function (req, res, next) {
  const sales = Sales.salesStats(Journal, Customers)
  res.json(sales)
})

router.get('/company/purchases', function (req, res, next) {
  const purchases = Purchases.purchases(Journal, Suppliers)
  res.json(purchases)
})

router.get('/company/purchases/stats', function (req, res, next) {
  const stats = Purchases.stats(Journal, Suppliers)
  res.json(stats)
})

router.get('/company/sales/byMonth', function (req, res, next) {
  const sales = Sales.salesByMonth(Journal)
  res.json(sales)
})

router.get('/company/sales/byCustomer', function (req, res, next) {
  const sales = Sales.salesByCustomer(Journal)
  res.json(sales)
})

module.exports = router
