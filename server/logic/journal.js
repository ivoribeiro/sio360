'use strict'
const fs = require('fs')
const xmlParser = require('xml2json')
const Moment = require('moment')
const path = require('path')
const saft = path.join(__dirname.substring(0, __dirname.lastIndexOf('/')), 'saft.xml')

const journals = () => {
  const xml = fs.readFileSync(saft, 'utf8')
  const result = xmlParser.toJson(xml)
  const { AuditFile: { GeneralLedgerEntries: { Journal } } } = JSON.parse(result)
  return Journal.map((journal) => {
    if (!Array.isArray(journal.Transaction)) {
      journal.Transaction = [journal.Transaction]
    }
    journal.Transaction = journal.Transaction.map((transaction) => {
      if (!Array.isArray(transaction.Lines.CreditLine)) {
        transaction.Lines.CreditLine = [transaction.Lines.CreditLine]
      }
      if (!Array.isArray(transaction.Lines.DebitLine)) {
        transaction.Lines.DebitLine = [transaction.Lines.DebitLine]
      }
      return transaction
    })
    journal.Transaction = journal.Transaction.sort((a, b) => {
      return new Moment(a.TransactionDate).format('YYYYMMDD') - new Moment(b.TransactionDate).format('YYYYMMDD')
    })

    return journal
  })
}

const journal = (journalId) => {
  const result = this.journals()
  return result.filter((journal) => {
    return journal.JournalID === journalId
  })
}

const journalTransactions = (journalId) => {
  return this.journal(journalId)
}

module.exports.journals = journals
module.exports.journal = journal
module.exports.journalTransactions = journalTransactions
