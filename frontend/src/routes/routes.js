import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'

import Dashboard from '@/pages/Dashboard.vue'
import CompanyProfile from '@/pages/CompanyProfile.vue'
import CompanyCustomers from '@/pages/Customers.vue'
import CompanySuppliers from '@/pages/Suppliers.vue'
import CompanyAccounts from '@/pages/Accounts.vue'
import Journals from '@/pages/Journals.vue'
import Typography from '@/pages/Typography.vue'
import Maps from '@/pages/Maps.vue'
import Notifications from '@/pages/Notifications.vue'
import CompanySales from '@/pages/Sales.vue'
import Purchases from '@/pages/Purchases.vue'

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
        path: 'purchases',
        name: 'Company Purchases',
        component: Purchases
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
        path: 'journals',
        name: 'Journals',
        component: Journals
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
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
