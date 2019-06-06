<template>
    <md-card>
        <md-card-content>
            <slot name="header"></slot>
        </md-card-content>
        <apexchart type=bar :height="height" :options="chartOptions" :series="series"/>
        <md-card-content>
            <slot name="content"></slot>
        </md-card-content>
        <md-card-actions md-alignment="left">
            <slot name="footer"></slot>
        </md-card-actions>
    </md-card>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  component: [VueApexCharts],
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    height: {
      type: Number,
      default: 350
    },
    categories: {
      type: Array,
      default: []
    },
    series: {
      type: Array,
      default: []
    },
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      chartOptions: {
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },

        xaxis: {
          categories: this.categories,
          title: {
            text: 'Customers',
          },
        },
        yaxis: {
          title: {
            text: 'Sales revenue'
          }
        },
        fill: {
          opacity: 1

        },
        tooltip: {
          y: {
            formatter: function (val) {
              return '€ ' + val
            }
          }
        }
      }
    }
  }
}
</script>
