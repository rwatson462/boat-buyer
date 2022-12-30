import { RouterProvider as ReactRouterProvider } from "react-router"
import { createBrowserRouter } from "react-router-dom"
import Routes from "../Data/routes"

const router = createBrowserRouter(Routes)

export default function RouterProvider() {
  return (
    <ReactRouterProvider router={router} />
  )
}
