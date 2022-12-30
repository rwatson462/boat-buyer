import BasketPage from "../Pages/BasketPage"
import ErrorPage from "../Pages/ErrorPage"
import IndexPage from "../Pages/IndexPage"
import ProductPage from "../Pages/ProductPage"

const Routes = [
  {
    path: '/',
    element: <IndexPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/basket',
    element: <BasketPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/product/:productId',
    element: <ProductPage />,
    errorElement: <ErrorPage />,
  }
]

export default Routes
