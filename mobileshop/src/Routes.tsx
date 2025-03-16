import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routeConfig from "./routesconfig";

const router = createBrowserRouter(routeConfig)

const Routes = () => {
    return <RouterProvider router={router} />
}

export default Routes