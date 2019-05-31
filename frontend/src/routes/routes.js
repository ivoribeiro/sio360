import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'

import Dashboard from '@/pages/Dashboard.vue'
import CompanyProfile from '@/pages/CompanyProfile.vue'
import CompanyCustomers from '@/pages/CustomersProfile.vue'
import CompanySuppliers from '@/pages/CompanySuppliers.vue'
import CompanyAccounts from '@/pages/Accounts.vue'
import JournalList from '@/pages/JournalList.vue'
import Typography from '@/pages/Typography.vue'
import Icons from '@/pages/Icons.vue'
import Maps from '@/pages/Maps.vue'
import Notifications from '@/pages/Notifications.vue'
import CompanySales from '@/pages/CompanySales.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'company',
        name: 'Company Profile',
        component: CompanyProfile
      },
      {
        path: 'sales',
        name: 'Company Sales',
        component: CompanySales
      },
      {
        path: 'customers',
        name: 'Company Customers',
        component: CompanyCustomers
      },
      {
        path: 'accounts',
        name: 'Company Accounts',
        component: CompanyAccounts
      },
      {
        path: 'suppliers',
        name: 'Company Suppliers',
        component: CompanySuppliers
      },
      {
        path: 'journalList',
        name: 'Journal List',
        component: JournalList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      }
    ]
  }
]

export default routes
