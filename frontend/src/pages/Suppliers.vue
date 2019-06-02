<template>
    <div class="content">
        <div class="md-layout">
            <div
                    v-for="supplier in suppliers"
                    v-bind:key="suppliers.SupplierID"
                    class="md-layout-item md-medium-size-100 md-size-100"
            >
                <edit-company-form
                        :title="supplier.SupplierID"
                        :description="supplier.CompanyName"
                        :Telephone="supplier.Telephone"
                        :Fax="supplier.Fax"
                        :CompanyName="supplier.CompanyName"
                        :Email="supplier.Email"
                        :CompanyAddress="supplier.BillingAddress"
                        :TaxRegistrationNumber="supplier.SupplierTaxID"
                        :StartDate="supplier.StartDate"
                        :EndDate="supplier.EndDate"
                        :FiscalYear="supplier.FiscalYear"
                        data-background-color="green"
                ></edit-company-form>
            </div>
        </div>
    </div>
</template>

<script>
import { EditCompanyForm } from '@/pages'
import axios from 'axios'

export default {
  components: {
    EditCompanyForm
  },
  data () {
    return {
      suppliers: []
    }
  },
  mounted () {
    axios
      .get(process.env.VUE_APP_API_URL + '/company/suppliers')
      .then(response => {
        this.suppliers = response.data
      })
  }
}
</script>
