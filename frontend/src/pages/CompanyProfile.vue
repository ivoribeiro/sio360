<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-100 md-size-66">
                <edit-company-form :Telephone="Telephone"
                                   :Fax="Fax"
                                   :CompanyName="CompanyName"
                                   :Email="Email"
                                   :CompanyAddress="CompanyAddress"
                                   :TaxRegistrationNumber="TaxRegistrationNumber"
                                   :StartDate="StartDate"
                                   :EndDate="EndDate"
                                   :FiscalYear="FiscalYear"
                                   data-background-color="green"></edit-company-form>
            </div>
            <div class="md-layout-item md-medium-size-100 md-size-33">
                <company-card></company-card>
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
      TaxRegistrationNumber: '',
      TaxAccountingBasis: '',
      CompanyName: '',
      CompanyAddress: '',
      FiscalYear: '',
      StartDate: '',
      EndDate: '',
      CurrencyCode: '',
      DateCreated: '',
      TaxEntity: '',
      ProductCompanyTaxID: '',
      SoftwareCertificateNumber: '',
      ProductID: '',
      ProductVersion: '',
      Telephone: '',
      Fax: '',
      Email: ''
    }
  },
  mounted () {
    axios.get(process.env.VUE_APP_API_URL + '/company').then(response => {
      this.TaxRegistrationNumber = response.data.TaxRegistrationNumber
      this.TaxAccountingBasis = response.data.TaxAccountingBasis
      this.CompanyName = response.data.CompanyName
      this.CompanyAddress = response.data.CompanyAddress
      this.FiscalYear = response.data.FiscalYear
      this.StartDate = response.data.StartDate
      this.EndDate = response.data.EndDate
      this.CurrencyCode = response.data.CurrencyCode
      this.DateCreated = response.data.DateCreated
      this.TaxEntity = response.data.TaxEntity
      this.ProductCompanyTaxID = response.data.ProductCompanyTaxID
      this.SoftwareCertificateNumber = response.data.SoftwareCertificateNumber
      this.ProductID = response.data.ProductID
      this.ProductVersion = response.data.ProductVersion
      this.Telephone = response.data.Telephone
      console.log(response.data.Telephone)
      this.Fax = response.data.Fax
      this.Email = response.data.Email
    })
  }
}
</script>
