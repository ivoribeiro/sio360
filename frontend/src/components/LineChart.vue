<template>
    <md-card>
        <md-card-content>
            <slot name="header"></slot>
        </md-card-content>
        <apexchart type=line :height="height" :options="chartOptions" :series="series"/>
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
    series: {
      type: Array,
      default: []
    },
    categories: {
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
        chart: {
          type: 'line',
          shadow: {
            enabled: false,
            color: '#bbb',
            top: 3,
            left: 2,
            blur: 3,
            opacity: 1
          },
        },
        stroke: {
          width: 7,
          curve: 'smooth'
        },

        xaxis: {
          type: 'category',
          categories: this.categories,
        },
        title: {
          text: this.title,
          align: 'left',
          style: {
            fontSize: '16px',
            color: '#666'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            gradientToColors: ['#FDD835'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          },
        },
        markers: {
          size: 4,
          opacity: 0.9,
          colors: ['#FFA41B'],
          strokeColor: '#fff',
          strokeWidth: 2,

          hover: {
            size: 7,
          }
        },
        yaxis: {
          min: 0,
          max: 4000000,
          title: {
            text: 'Sales revenue',
          },
        }
      }
    }
  }
}
</script>
