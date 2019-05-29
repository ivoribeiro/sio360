<template>
  <div class="content">
    <div class="md-layout">
      <div
        v-for="account in accounts"
        v-bind:key="account.AccountID"
        class="md-layout-item md-medium-size-100 md-size-33"
      >
        <company-card
          :label="account.GroupingCategory"
          icon="attach_money"
          :title="account.AccountDescription"
        >
          <description>
            <b>Opening Debit:</b> {{ account.OpeningDebitBalance }} <br />
            <b>Closed Debit:</b> {{ account.ClosingDebitBalance }} <br />
            <b>Opening Credit:</b> {{ account.OpeningCreditBalance }} <br />
            <b>Closed Credit:</b> {{ account.ClosingCreditBalance }} <br />
          </description>
        </company-card>
      </div>
    </div>
  </div>
</template>

<script>
import { CompanyCard } from "@/pages";
import axios from "axios";

export default {
  components: {
    CompanyCard
  },
  data() {
    return {
      accounts: []
    };
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_API_URL + "/company/accounts")
      .then(response => {
        this.accounts = response.data;
      });
  }
};
</script>
