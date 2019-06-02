'use strict'
const path = require('path')
const saft = path.join(__dirname.substring(0, __dirname.lastIndexOf('/')), 'saft.xml')
const fs = require('fs')
const xmlParser = require('xml2json')

const accounts = () => {
  const xml = fs.readFileSync(saft, 'utf8')
  const result = xmlParser.toJson(xml)
  const { AuditFile: { MasterFiles: { GeneralLedgerAccounts: { Account } } } } = JSON.parse(result)
  return Account
}

const accountById = (accountId) => {
  const Account = this.accounts()
  const byAccount = Account.filter((account) => {
    return account.AccountID === accountId
  })
  return byAccount[0]
}

const salesStats = (Journals, Accounts) => {
  const sales = this.sales(Journals)

}

module.exports.accounts = accounts
module.exports.byAccount = accountById
