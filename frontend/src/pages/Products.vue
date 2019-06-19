<template>
    <div class="content">
        <div class="md-layout">
            <div
                    v-for="product in products"
                    v-bind:key="product.ProductNumberCode"
                    class="md-layout-item md-medium-size-100 md-size-33"
            >
                <company-card
                        :label="product.ProductGroup"
                        icon="computer"
                        :title="product.ProductDescription">
                    <description>
                        <b>Product Code:</b> {{ product.ProductCode }} <br/>
                        <b>Product Group:</b> {{ product.ProductGroup }} <br/>
                        <b>Initial Stock:</b> {{ product.InitialStock }} <br/>
                        <b>Current Stock:</b> {{ product.CurrentStock }} <br/>
                    </description>
                </company-card>
            </div>
        </div>
    </div>
</template>

<script>
import { CompanyCard } from '@/pages'
import axios from 'axios'

export default {
  components: {
    CompanyCard
  },
  data () {
    return {
      products: []
    }
  },
  mounted () {
    axios
      .get(process.env.VUE_APP_API_URL + '/company/products')
      .then(response => {
        this.products = response.data
      })
  }
}
</script>
