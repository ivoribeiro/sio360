<template>
    <div>
        <md-table v-model="lines" :table-header-color="tableHeaderColor">
            <md-table-row @click="changeModal(true,item)" slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Description">
                    {{ item.Description }}
                </md-table-cell>
                <md-table-cell md-label="Type"
                >{{ item.TransactionType }}
                </md-table-cell>
                <md-table-cell md-label="Date"
                >{{ item.TransactionDate }}
                </md-table-cell>
            </md-table-row>
        </md-table>
        <md-dialog :md-active.sync="classicModal">
            <md-dialog-title>Lines</md-dialog-title>
            <md-dialog-content>
                <md-tabs md-dynamic-height>
                    <md-tab md-label="Credit">
                        <md-table style="color: black" :table-header-color="tableHeaderColor">
                            <md-table-row slot="md-table-row">
                                <md-table-cell md-label="CreditAmount">
                                    {{TransactionLines.CreditLine}}
                                </md-table-cell>
                            </md-table-row>
                        </md-table>
                    </md-tab>
                    <md-tab md-label="Debit">
                        <md-table :table-header-color="tableHeaderColor">
                            <md-table-row slot="md-table-row">
                                <md-table-cell md-label="CreditAmount">
                                    {{TransactionLines.DebitLine}}
                                </md-table-cell>
                            </md-table-row>
                        </md-table>
                    </md-tab>
                </md-tabs>
            </md-dialog-content>
            <md-dialog-actions>
                <md-button class="md-primary" @click="changeModal(false)">Close</md-button>
            </md-dialog-actions>
        </md-dialog>
    </div>
</template>

<script>
import { Modal } from '@/components'

export default {
  name: 'simple-table',
  components: {
    Modal
  },
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    },
    lines: Array
  },
  data () {
    return {
      selected: [],
      classicModal: false,
      TransactionLines: {}
    }
  },
  methods: {
    changeModal: function (value, item) {
      this.classicModal = value
      if (item) {
        this.TransactionLines = item.Lines
        console.log(item.Lines)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .md-dialog {
        max-width: 768px;
    }
</style>
