<template>
    <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
        <notifications></notifications>

        <side-bar>
            <mobile-menu slot="content"></mobile-menu>
            <sidebar-link to="/dashboard">
                <md-icon>dashboard</md-icon>
                <p>Dashboard</p>
            </sidebar-link>
            <sidebar-link to="/company">
                <md-icon>business_center</md-icon>
                <p>About</p>
            </sidebar-link>
            <sidebar-link to="/customers">
                <md-icon>favorite</md-icon>
                <p>Customers</p>
            </sidebar-link>
            <sidebar-link to="/accounts">
                <md-icon>account_balance</md-icon>
                <p>Accounts</p>
            </sidebar-link>
            <sidebar-link to="/journals">
                <md-icon>content_paste</md-icon>
                <p>Transactions</p>
            </sidebar-link>
            <sidebar-link to="/sales">
                <md-icon>attach_money</md-icon>
                <p>Sales</p>
            </sidebar-link>
            <sidebar-link to="/purchases">
                <md-icon>shopping_cart</md-icon>
                <p>Purchases</p>
            </sidebar-link>
            <sidebar-link to="/suppliers">
                <md-icon>directions_boat</md-icon>
                <p>Suppliers</p>
            </sidebar-link>
            <sidebar-link to="/typography">
                <md-icon>kitchen</md-icon>
                <p>Stock</p>
            </sidebar-link>
            <sidebar-link v-if="maps" to="/maps">
                <md-icon>location_on</md-icon>
                <p>Maps</p>
            </sidebar-link>
        </side-bar>

        <div class="main-panel">
            <top-navbar></top-navbar>

            <dashboard-content></dashboard-content>

            <content-footer v-if="!$route.meta.hideFooter"></content-footer>
        </div>
    </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from './TopNavbar.vue'
import ContentFooter from './ContentFooter.vue'
import DashboardContent from './Content.vue'
import MobileMenu from '@/pages/Layout/MobileMenu.vue'

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  }, data () {
    return {
      maps: false
    }
  }
}
</script>
