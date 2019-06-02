<template>
    <div class="content">
        <div class="md-layout">
            <div
                    v-for="customer in customers"
                    v-bind:key="customer.CustomerID"
                    class="md-layout-item md-medium-size-100 md-size-100"
            >
                <edit-company-form
                        :title="customer.CustomerID"
                        :description="customer.CompanyName"
                        :Telephone="customer.Telephone"
                        :Fax="customer.Fax"
                        :CompanyName="customer.CompanyName"
                        :Email="customer.Email"
                        :CompanyAddress="customer.BillingAddress"
                        :TaxRegistrationNumber="customer.CustomerTaxID"
                        :StartDate="customer.StartDate"
                        :EndDate="customer.EndDate"
                        :FiscalYear="customer.FiscalYear"
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
      customers: []
    }
  },
  mounted () {
    axios
      .get(process.env.VUE_APP_API_URL + '/company/customers')
      .then(response => {
        this.customers = response.data
      })
  }
}
</script>
