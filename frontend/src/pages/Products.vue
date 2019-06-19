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
                        <b>Closed Debit:</b> {{ product.ProductCode }} <br/>
                        <b>Opening Credit:</b> {{ product.ProductGroup }} <br/>
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
