'use strict'
const Moment = require('moment')

const purchases = (Journals) => {
  const transactions = Journals.journalTransactions('00041')
  return transactions[0]
}

const purchasesByMonth = (Journals) => {
  const purchases = purchases(Journals)
  const monthSet = new Set()
  let purchasesPerMonth = {}
  purchases.Transaction.map((purchase) => {
    const date = Moment(purchase.TransactionDate, 'YYYY/MM/DD')
    const month = date.format('M')
    monthSet.add(month)
    if (purchasesPerMonth[month] === undefined) {
      purchasesPerMonth[month] = 0
    }
    purchasesPerMonth[month] = purchasesPerMonth[month] + 1
    return month
  })
  return { sales: Object.values(purchasesPerMonth), months: Array.from(monthSet) }
}

const stats = (Journals) => {
  const purchases = this.purchases(Journals)
  let total = 0
  purchases.Transaction.map((purchase) => {
    purchase.Lines.CreditLine.map((line) => {
      if (line.CreditAmount) {
        total = parseInt(line.CreditAmount) + parseInt(total)
      }
    })
  })

  return { purchasesTotal: total }
}

module.exports.purchases = purchases
module.exports.stats = stats
module.exports.purchasesByMonth = purchasesByMonth
