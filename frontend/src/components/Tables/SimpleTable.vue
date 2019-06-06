<template>
    <div>
        <md-table v-model="lines" :table-header-color="tableHeaderColor">
            <md-table-row @click="changeModal(true,item)" slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Description">
                    {{ item.Description }}
                </md-table-cell>
                <md-table-cell v-if="item.salesTotal" md-label="Value ( € )"
                >{{ item.salesTotal }}
                </md-table-cell>
                <md-table-cell md-label="Type"
                >{{ item.TransactionType }}
                </md-table-cell>
                <md-table-cell md-label="Debit Lines"
                >{{ Array.isArray(item.Lines.CreditLine)?item.Lines.CreditLine.length:1 }}
                </md-table-cell>
                <md-table-cell md-label="Credit Lines"
                > {{ Array.isArray(item.Lines.DebitLines)?item.Lines.DebitLine.length:1 }}
                </md-table-cell>
                <md-table-cell md-label="Date"
                >{{ item.TransactionDate }}
                </md-table-cell>
            </md-table-row>
        </md-table>
        <md-dialog :md-active.sync="classicModal">
            <md-dialog-title>Lines</md-dialog-title>
            <md-dialog-content>
                <md-tabs md-alignment="fixed">
                    <md-tab md-label="Credit">
                        <md-table :table-header-color="tableHeaderColor">
                            <md-table-row slot="md-table-row">
                                <md-table-cell md-label="CreditAmount">
                                    <md-table v-model="TransactionLines.DebitLine"
                                              :table-header-color="tableHeaderColor">
                                        <md-table-row slot="md-table-row"
                                                      slot-scope="{ item }">
                                            <md-table-cell md-label="Description">
                                                {{ item.Description }}
                                            </md-table-cell>
                                            <md-table-cell md-label="Amount">
                                                {{ item.DebitAmount }}
                                            </md-table-cell>
                                            <md-table-cell md-label="AccountID">
                                                {{ item.AccountID }}
                                            </md-table-cell>
                                            <md-table-cell md-label="Date">
                                                {{ item.SystemEntryDate }}
                                            </md-table-cell>
                                        </md-table-row>
                                    </md-table>
                                </md-table-cell>
                            </md-table-row>
                        </md-table>
                    </md-tab>
                    <md-tab md-label="Debit">
                        <md-table :table-header-color="tableHeaderColor">
                            <md-table-row slot="md-table-row">
                                <md-table-cell md-label="CreditAmount">
                                    <md-table v-model="TransactionLines.CreditLine"
                                              :table-header-color="tableHeaderColor">
                                        <md-table-row slot="md-table-row"
                                                      slot-scope="{ item }">
                                            <md-table-cell md-label="Description">
                                                {{ item.Description }}
                                            </md-table-cell>
                                            <md-table-cell md-label="Amount">
                                                {{ item.CreditAmount }}
                                            </md-table-cell>
                                            <md-table-cell md-label="AccountID">
                                                {{ item.AccountID }}
                                            </md-table-cell>
                                            <md-table-cell md-label="Date">
                                                {{ item.SystemEntryDate }}
                                            </md-table-cell>
                                        </md-table-row>
                                    </md-table>
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

<style lang="scss">
    .md-tabs {
        margin-bottom: 24px;
    }

    .md-tabs-content table thead {
        display: contents !important;
    }
</style>
