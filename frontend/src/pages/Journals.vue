<template>
    <div class="content">
        <div class="md-layout">
            <div
                    v-for="journal in journals"
                    v-bind:key="journal.JournalID"
                    class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
            >
                <md-card>
                    <md-card-header data-background-color="green">
                        <h4 class="title">
                            {{ journal.JournalID }}
                        </h4>
                        <p class="category">{{ journal.Description }}</p>
                    </md-card-header>
                    <md-card-content>
                        <simple-table
                                :lines="journal.Transaction"
                                table-header-color="green"
                        ></simple-table>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
import { SimpleTable } from '@/components'
import axios from 'axios'

export default {
  components: {
    SimpleTable
  },
  data () {
    return {
      journals: []
    }
  },
  mounted () {
    axios
      .get(process.env.VUE_APP_API_URL + '/company/journals')
      .then(response => {
        console.log(response.data)
        this.journals = response.data
      })
  }
}
</script>
