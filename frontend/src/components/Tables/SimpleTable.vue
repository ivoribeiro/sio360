<template>
  <div>
    <md-table v-model="lines" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Description"
          >{{ item.Description }}
        </md-table-cell>
        <md-table-cell md-label="Type"
          >{{ item.TransactionType }}
        </md-table-cell>
        <md-table-cell md-label="Date"
          >{{ item.TransactionDate }}
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    },
    lines: Array
  },
  data() {
    return {
      selected: []
    };
  }
};
</script>
