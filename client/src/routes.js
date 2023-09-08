import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Shop from './pages/Shop'
import Basket from './pages/Basket'
import DevicePage from './pages/DevicePage'
import { ADMIN_ROUTE, AUTH_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from './utils/consts'

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: BASKET_ROUTE,
    Component: Basket
  },
]

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop
  },
  {
    path: AUTH_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: DevicePage
  }
]