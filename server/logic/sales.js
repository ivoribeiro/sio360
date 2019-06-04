'use strict'
const Moment = require('moment')

const sales = (Journals) => {
  const transactions = Journals.journalTransactions('003')
  return transactions[0]
}

const salesByMonth = (Journals) => {
  const sales = this.sales(Journals)
  const monthSet = new Set()
  let salesPerMonth = {}
  sales.Transaction.map((sale) => {
    const date = Moment(sale.TransactionDate, 'YYYY/MM/DD')
    const month = date.format('M')
    monthSet.add(month)
    if (salesPerMonth[month] === undefined) {
      salesPerMonth[month] = 0
    }
    salesPerMonth[month] = salesPerMonth[month] + 1
    return month
  })
  return { sales: Object.values(salesPerMonth), months: Array.from(monthSet) }
}

const salesByCustomer = (Journals) => {
  const sales = this.sales(Journals)
  let salesPerCustomer = {}
  sales.Transaction.map((sale) => {
    if (salesPerCustomer[sale.CustomerID] === undefined) {
      salesPerCustomer[sale.CustomerID] = 0
    }
    salesPerCustomer[sale.CustomerID] = salesPerCustomer[sale.CustomerID] + 1
    return sale
  })
  return { sales: Object.values(salesPerCustomer), customers: Object.keys(salesPerCustomer) }
}

const salesStats = (Journals) => {
  const sales = this.sales(Journals)
  let salesTotal = 0
  sales.Transaction.map((sale) => {
    sale.Lines.CreditLine.map((line) => {
      if (line.CreditAmount) {
        salesTotal = parseInt(line.CreditAmount) + parseInt(salesTotal)
      }
    })
  })

  return { salesTotal }
}

module.exports.sales = sales
module.exports.salesByMonth = salesByMonth
module.exports.salesByCustomer = salesByCustomer
module.exports.salesStats = salesStats
