<template>
    <div class="content">
        <div class="md-layout">
            <div
                    class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
                <line-chart title="Sales" :series="monthlySalesChart" :height=350 data-background-color="blue">
                    <template slot="header">
                        <md-card-header
                                data-background-color="blue">
                            <h4 class="title">Sales Revenue By Month</h4>
                            <p class="category">Line chart showing sales revenue evolution</p>
                        </md-card-header>
                    </template>
                    <template slot="content">
                        <h4 class="title">Indicators</h4>
                        <p class="category">
              <span class="text-success"><i class="fas fa-long-arrow-alt-up"></i> {{Math.max.apply(null,monthlySalesChart[0].data)}}
                                              € (highest value)
                                </span>
                            <span class="text-danger">
              <i class="fas fa-long-arrow-alt-down"></i> {{Math.min.apply(null,monthlySalesChart[0].data)}}
                            € (lowest value)
    </span>
                        </p>
                    </template>
                    <template slot="footer">
                        <div class="stats">
                            <md-icon>access_time</md-icon>
                            Just Updated
                        </div>
                    </template>
                </line-chart>
            </div>
            <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
                <bar-chart title="Sales" :categories="customerSalesChart[0].categories" :series="customerSalesChart"
                           :height=350 data-background-color="blue">
                    <template slot="header">
                        <md-card-header
                                data-background-color="green">
                            <h4 class="title">Sales Revenue By Customer</h4>
                            <p class="category">Bar chart showing sales revenue by customer</p>
                        </md-card-header>
                    </template>
                    <template slot="content">
                        <h4 class="title">Indicators</h4>
                        <p class="category">
              <span class="text-success"><i class="fas fa-long-arrow-alt-up"></i> {{Math.max.apply(null,customerSalesChart[0].data)}}
                                              € (highest value)
                                </span>
                            <span class="text-danger">
              <i class="fas fa-long-arrow-alt-down"></i> {{Math.min.apply(null,customerSalesChart[0].data)}}
                            € (lowest value)
    </span>
                        </p>
                    </template>
                    <template slot="footer">
                        <div class="stats">
                            <md-icon>access_time</md-icon>
                            Just Updated
                        </div>
                    </template>
                </bar-chart>
            </div>
            <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
                <stats-card data-background-color="green">
                    <template slot="header">
                        <md-icon>store</md-icon>
                    </template>

                    <template slot="content">
                        <p class="category">Revenue</p>
                        <h3 class="title">€{{salesTotal-purchasesTotal}}</h3>
                    </template>

                    <template slot="footer">
                        <div class="stats">
                            <md-icon>date_range</md-icon>
                            2018
                        </div>
                    </template>
                </stats-card>
            </div>
            <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
                <stats-card data-background-color="orange">
                    <template slot="header">
                        <md-icon>content_copy</md-icon>
                    </template>

                    <template slot="content">
                        <p class="category">Customers</p>
                        <h3 class="title">
                            {{this.customers.length}}
                        </h3>
                    </template>
                    <template slot="footer">
                        <div class="stats">
                            <md-icon class="text-danger">favorite</md-icon>
                            <a href="#/customers">See who they are</a>
                        </div>
                    </template>
                </stats-card>
            </div>
            <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
                <stats-card data-background-color="red">
                    <template slot="header">
                        <md-icon>info_outline</md-icon>
                    </template>

                    <template slot="content">
                        <p class="category">Suppliers</p>
                        <h3 class="title">{{this.suppliers.length}}</h3>
                    </template>

                    <template slot="footer">
                        <div class="stats">
                            <md-icon>local_offer</md-icon>
                            <a href="#/suppliers">Check them</a>
                        </div>
                    </template>
                </stats-card>
            </div>
            <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
                <stats-card data-background-color="blue">
                    <template slot="header">
                        <i class="fab fa-twitter"></i>
                    </template>

                    <template slot="content">
                        <p class="category">Folowers</p>
                        <h3 class="title">+245</h3>
                    </template>

                    <template slot="footer">
                        <div class="stats">
                            <md-icon>update</md-icon>
                            Just Updated
                        </div>
                    </template>
                </stats-card>
            </div>
            <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
                <md-card>
                    <md-card-header data-background-color="orange">
                        <h4 class="title">Top Sales</h4>
                        <p class="category">Top 10 Sales in 2018</p>
                    </md-card-header>
                    <md-card-content>
                        <simple-table
                                :lines="topSales"
                                table-header-color="orange"
                        ></simple-table>
                    </md-card-content>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
                <pie-chart :categories="['Sales', 'Purchases']" :series="[salesTotal,purchasesTotal]" :width=600
                           data-background-color="blue">
                    <template slot="header">
                        <md-card-header
                                data-background-color="blue">
                            <h4 class="title">Profit Chart</h4>
                            <p class="category">Pie chart comparing sales revenue and purchases </p>
                        </md-card-header>
                    </template>
                    <template slot="content">
                        <h4 class="title">ROI Percentage</h4>
                        <p class="category">
              <span class="text-success"
              ><i class="fas fa-long-arrow-alt-up"></i> {{parseFloat(((salesTotal-purchasesTotal)/purchasesTotal)*100).toFixed(2)}}
              </span>
                            % of ROI between costs with purchases and sales
                        </p>
                    </template>
                    <template slot="footer">
                        <div class="stats">
                            <md-icon>access_time</md-icon>
                            Just Updated
                        </div>
                    </template>
                </pie-chart>
            </div>
            <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                <pie-chart :categories="productSalesChart.categories" :series="productSalesChart.data" :width=600
                           data-background-color="red">
                    <template slot="header">
                        <md-card-header
                                data-background-color="red">
                            <h4 class="title">Products Chart</h4>
                            <p class="category">Pie chart comparing sales by product </p>
                        </md-card-header>
                    </template>
                    <template slot="content">
                        <h4 class="title">ROI Percentage</h4>
                        <p class="category">
              <span class="text-success"
              ><i class="fas fa-long-arrow-alt-up"></i> {{parseFloat(((salesTotal-purchasesTotal)/purchasesTotal)*100).toFixed(2)}}
              </span>
                            % of ROI between costs with purchases and sales
                        </p>
                    </template>
                    <template slot="footer">
                        <div class="stats">
                            <md-icon>access_time</md-icon>
                            Just Updated
                        </div>
                    </template>
                </pie-chart>
            </div>
        </div>
    </div>
</template>

<script>
import {
  StatsCard,
  ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable,
  SimpleTable,
  PieChart,
  LineChart,
  BarChart
} from '@/components'
import axios from 'axios'
import moment from 'moment'

export default {
  components: {
    PieChart,
    LineChart,
    BarChart,
    StatsCard,
    ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable,
    SimpleTable
  },
  data () {
    return {
      purchasesTotal: 0,
      topSales: [],
      salesTotal: 0,
      customers: [],
      suppliers: [],
      monthlySalesChart: [],
      customerSalesChart: [],
      productSalesChart: []
    }
  },
  mounted () {
    axios
      .get(process.env.VUE_APP_API_URL + '/company/products/sales')
      .then(response => {
        this.productSalesChart = {
          name: 'revenue',
          data: response.data.sales,
          categories: response.data.products
        }
      })
    axios.get(process.env.VUE_APP_API_URL + '/company/sales/stats').then(response => {
      this.salesTotal = response.data.salesTotal
      this.monthlySalesChart = [{
        name: 'revenue',
        data: response.data.salesValueByMonth.sales,
        categories: response.data.salesValueByMonth.months
      }]
      this.customerSalesChart = [{
        name: 'revenue',
        data: response.data.salesValueByCustomer.sales,
        categories: response.data.salesValueByCustomer.customers
      }]

    })
    axios
      .get(process.env.VUE_APP_API_URL + '/company/sales/byRevenue')
      .then(response => {
        this.topSales = response.data.Transaction.slice(0, 10)
      })

    axios.get(process.env.VUE_APP_API_URL + '/company/suppliers')
      .then(response => {
        this.suppliers = response.data
      })

    axios.get(process.env.VUE_APP_API_URL + '/company/purchases/stats')
      .then(response => {
        this.purchasesTotal = response.data.purchasesTotal
      })
    axios.get(process.env.VUE_APP_API_URL + '/company/customers')
      .then(response => {
        this.customers = response.data
      })

  }
}
</script>
