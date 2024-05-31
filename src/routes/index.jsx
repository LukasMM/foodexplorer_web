import { BrowserRouter } from 'react-router-dom'

import { useAuth } from '../hooks/auth'

import { AuthRoutes } from './auth.routes'
import { AdminRoutes } from './admin.routes'
import { CustomerRoutes } from './customer.routes'

export function Routes() {
  const { user } = useAuth()

  return (
    <BrowserRouter>
      {user && user.admin == 1 ? <AdminRoutes /> : user && user.admin == 0 ? <CustomerRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}