<template>
    <div class="content">
        <div class="md-layout">
            <div v-for="costumer in costumers" class="md-layout-item md-medium-size-100 md-size-100">
                <edit-company-form :Telephone="costumer.Telephone"
                                   :Fax="costumer.Fax"
                                   :CompanyName="costumer.CompanyName"
                                   :Email="costumer.Email"
                                   :CompanyAddress="costumer.BillingAddress"
                                   :TaxRegistrationNumber="costumer.TaxRegistrationNumber"
                                   :StartDate="costumer.StartDate"
                                   :EndDate="costumer.EndDate"
                                   :FiscalYear="costumer.FiscalYear"
                                   data-background-color="green"></edit-company-form>
            </div>
        </div>
    </div>
</template>

<script>
import { EditCompanyForm, CompanyCard } from '@/pages'
import axios from 'axios'

export default {
  components: {
    EditCompanyForm,
    CompanyCard
  },
  data () {
    return {
      costumers: []
    }
  },
  mounted () {
    axios.get('http://127.0.0.1:3000/company/customers').then(response => {
      this.costumers = response.data
    })
  }
}
</script>
