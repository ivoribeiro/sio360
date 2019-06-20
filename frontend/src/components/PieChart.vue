<template>
    <md-card>
        <md-card-content>
            <slot name="header"></slot>
        </md-card-content>
        <apexchart type=pie :width="width" :options="chartOptions" :series="series"/>
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
    categories: {
      type: Array,
      default: [],
    },
    width: {
      type: Number,
      default: 300
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
    console.log(this.categories)
    console.log(this.series)
    return {
      chartOptions: {
        labels: this.categories,
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 400
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    }
  }
}
</script>
