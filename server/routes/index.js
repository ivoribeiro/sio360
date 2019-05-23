const express = require('express')
const router = express.Router()
const xmlParser = require('xml2json')
const fs = require('fs')
const Journal = require('../logic/journal')

/* GET home page. */
router.get('/', function (req, res, next) {
  const xml = fs.readFileSync('./saft.xml', 'utf8')
  const result = xmlParser.toJson(xml)
  res.json(JSON.parse(result))
})

router.get('/company', function (req, res, next) {
  const xml = fs.readFileSync('./saft.xml', 'utf8')
  const result = xmlParser.toJson(xml)
  const {AuditFile: {Header}} = JSON.parse(result)
  res.json(Header)
})

router.get('/company/accounts', function (req, res, next) {
  const xml = fs.readFileSync('./saft.xml', 'utf8')
  const result = xmlParser.toJson(xml)
  const {AuditFile: {MasterFiles: {GeneralLedgerAccounts: {Account}}}} = JSON.parse(result)
  res.json(Account)
})

router.get('/company/accounts/:accountId', function (req, res, next) {
  const xml = fs.readFileSync('./saft.xml', 'utf8')
  const result = xmlParser.toJson(xml)
  const {AuditFile: {MasterFiles: {GeneralLedgerAccounts: {Account}}}} = JSON.parse(result)
  const byAccount = Account.filter((account) => {
    return account.AccountID === req.params.accountId
  })
  res.json(byAccount)
})

router.get('/company/customers', function (req, res, next) {
  const xml = fs.readFileSync('./saft.xml', 'utf8')
  const result = xmlParser.toJson(xml)
  const {AuditFile: {MasterFiles: {Customer}}} = JSON.parse(result)
  res.json(Customer)
})

router.get('/company/customers/:clientId', function (req, res, next) {
  const xml = fs.readFileSync('./saft.xml', 'utf8')
  const result = xmlParser.toJson(xml)
  const {AuditFile: {MasterFiles: {Customer}}} = JSON.parse(result)
  const byClient = Customer.filter((account) => {
    return account.CustomerID === req.params.clientId
  })
  res.json(byClient)
})

router.get('/company/suppliers', function (req, res, next) {
  const xml = fs.readFileSync('./saft.xml', 'utf8')
  const result = xmlParser.toJson(xml)
  const {AuditFile: {MasterFiles: {Supplier}}} = JSON.parse(result)
  res.json(Supplier)
})

router.get('/company/suplliers/:supplierId', function (req, res, next) {
  const xml = fs.readFileSync('./saft.xml', 'utf8')
  const result = xmlParser.toJson(xml)
  const {AuditFile: {MasterFiles: {Supllier}}} = JSON.parse(result)
  const bySupplier = Supllier.filter((supplier) => {
    return supplier.SupplierID === req.params.supplierId
  })
  res.json(bySupplier)
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

module.exports = router
