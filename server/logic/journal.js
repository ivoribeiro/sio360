'use strict'
const fs = require('fs')
const xmlParser = require('xml2json')

const journals = () => {
  const xml = fs.readFileSync('./saft.xml', 'utf8')
  const result = xmlParser.toJson(xml)
  const {AuditFile: {GeneralLedgerEntries: {Journal}}} = JSON.parse(result)
  return Journal
}

const journal = (journalId) => {
  const result = this.journals()
  const byJournal = result.filter((journal) => {
    return journal.JournalID === journalId
  })
  return byJournal
}

const journalTransactions = (journalId) => {
  const result = this.journal(journalId)
  return result
}

module.exports.journals = journals
module.exports.journal = journal
module.exports.journalTransactions = journalTransactions
