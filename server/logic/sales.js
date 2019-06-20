'use strict'
const Moment = require('moment')

const sales = (Journals, Customers) => {
  const transactions = Journals.journalTransactions('00022')
  transactions[0].Transaction = transactions[0].Transaction.map((sale) => {
    sale.total = 0
    sale.Lines.CreditLine.map((line) => {
      if (line.CreditAmount) {
        sale.total = parseFloat(line.CreditAmount) + parseFloat(sale.total)
      }
    })
    const { CompanyName } = Customers.byId(sale.CustomerID)
    sale.CompanyName = CompanyName
    return sale
  })

  return transactions[0]
}

const salesByRevenue = (Journals, Customers) => {
  const sales = this.sales(Journals, Customers)
  const withTotal = sales.Transaction.map((sale) => {
    sale.total = 0
    sale.Lines.CreditLine.map((line) => {
      if (line.CreditAmount) {
        sale.total = parseFloat(line.CreditAmount) + parseFloat(sale.total)
      }
    })
    return sale
  })
  sales.Transaction = withTotal.sort((a, b) => {
    return b.total - a.total
  })
  return sales
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
const salesValueByMonth = (Journals, Customers) => {
  const sales = this.salesByRevenue(Journals, Customers)
  const monthSet = new Set()
  let salesPerMonth = {}
  sales.Transaction.map((sale) => {
    const date = Moment(sale.TransactionDate, 'YYYY/MM/DD')
    const month = date.format('M')
    monthSet.add(month)
    if (salesPerMonth[month] === undefined) {
      salesPerMonth[month] = 0
    }
    salesPerMonth[month] = salesPerMonth[month] + sale.total
    return month
  })
  return { sales: Object.values(salesPerMonth), months: Array.from(monthSet) }
}

const salesValueByCustomer = (Journals, Customers) => {
  const sales = this.salesByRevenue(Journals, Customers)
  let salesPerCustomer = {}
  sales.Transaction.map((sale) => {
    const { CompanyName } = Customers.byId(sale.CustomerID)
    if (salesPerCustomer[CompanyName] === undefined) {
      salesPerCustomer[CompanyName] = 0
    }
    salesPerCustomer[CompanyName] = salesPerCustomer[CompanyName] + sale.total
    return sale
  })
  return { sales: Object.values(salesPerCustomer), customers: Object.keys(salesPerCustomer) }
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

const salesStats = (Journals, Customers) => {
  const sales = this.sales(Journals, Customers)
  let salesTotal = 0
  sales.Transaction.map((sale) => {
    salesTotal = parseInt(sale.total) + parseInt(salesTotal)
  })
  const byValue = salesValueByMonth(Journals, Customers)
  const byCustomer = salesValueByCustomer(Journals, Customers)
  return { salesTotal, salesValueByMonth: byValue, salesValueByCustomer: byCustomer }
}

module.exports.sales = sales
module.exports.salesByMonth = salesByMonth
module.exports.salesByCustomer = salesByCustomer
module.exports.salesStats = salesStats
module.exports.salesByRevenue = salesByRevenue
