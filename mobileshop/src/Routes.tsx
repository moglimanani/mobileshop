import { Route, Routes } from "react-router";
import routeConfig from "./routesconfig";

const RoutesComponent = () => {
    return (
        <Routes>
            {routeConfig.map((navItem, id) =>
                <Route path={navItem.path} element={navItem.element} key={`route-${id}`} />
            )}
        </Routes>
    )
}

export default RoutesComponent