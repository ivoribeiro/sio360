<template>
    <form>
        <md-card>
            <md-card-header :data-background-color="dataBackgroundColor">
                <h4 class="title">{{title}}</h4>
                <p class="category">{{description}}</p>
            </md-card-header>

            <md-card-content>
                <div class="md-layout">
                    <div class="md-layout-item md-small-size-100 md-size-33">
                        <md-field>
                            <label>Company</label>
                            <md-input v-model="CompanyName" disabled></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-33">
                        <md-field>
                            <label>Tax Registration Number</label>
                            <md-input
                                    v-model="TaxRegistrationNumber"
                                    type="text"
                                    disabled
                            ></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-33">
                        <md-field>
                            <label>Email Address</label>
                            <md-input v-model="Email" type="email" disabled></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-50">
                        <md-field>
                            <label>Telephone</label>
                            <md-input v-model="Telephone" type="text" disabled></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-50">
                        <md-field>
                            <label>Fax</label>
                            <md-input v-model="Fax" type="text" disabled></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-100">
                        <md-field>
                            <label>Adress</label>
                            <md-input
                                    v-model="CompanyAddress.AddressDetail"
                                    disabled
                                    type="text"
                            ></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-33">
                        <md-field>
                            <label>City</label>
                            <md-input
                                    v-model="CompanyAddress.City"
                                    disabled
                                    type="text"
                            ></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-33">
                        <md-field>
                            <label>Country</label>
                            <md-input
                                    v-model="CompanyAddress.Country"
                                    disabled
                                    type="text"
                            ></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-33">
                        <md-field>
                            <label>Postal Code</label>
                            <md-input
                                    v-model="CompanyAddress.PostalCode"
                                    disabled
                                    type="text"
                            ></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-33">
                        <md-field>
                            <label>Fiscal Year</label>
                            <md-input v-model="FiscalYear" disabled type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-33">
                        <md-field>
                            <label>Start Date</label>
                            <md-input v-model="StartDate" disabled type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-33">
                        <md-field>
                            <label>End Date</label>
                            <md-input v-model="EndDate" disabled type="text"></md-input>
                        </md-field>
                    </div>
                </div>
            </md-card-content>
        </md-card>
    </form>
</template>
<script>
export default {
  name: 'edit-company-form',
  props: {

    title: {
      type: String,
      default: 'Edit Profile'
    }, description: {
      type: String,
      default: 'Complete your profile'
    },
    dataBackgroundColor: {
      type: String,
      default: ''
    },
    TaxRegistrationNumber: {
      type: String,
      default: ''
    },
    TaxAccountingBasis: {
      type: String,
      default: ''
    },
    CompanyName: {
      type: String,
      default: ''
    },
    CompanyAddress: {
      type: Object,
      default: function () {
        return { message: 'hello' }
      }
    },
    FiscalYear: {
      type: String,
      default: ''
    },
    StartDate: {
      type: String,
      default: ''
    },
    EndDate: {
      type: String,
      default: ''
    },
    CurrencyCode: {
      type: String,
      default: ''
    },
    DateCreated: {
      type: String,
      default: ''
    },
    TaxEntity: {
      type: String,
      default: ''
    },
    ProductCompanyTaxID: {
      type: String,
      default: ''
    },
    SoftwareCertificateNumber: {
      type: String,
      default: ''
    },
    ProductID: {
      type: String,
      default: ''
    },
    ProductVersion: {
      type: String,
      default: ''
    },
    Telephone: {
      type: String,
      default: ''
    },
    Fax: {
      type: String,
      default: ''
    },
    Email: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  }
}
</script>
<style></style>
