import { Cart } from "pages/Cart/Cart";
import { createBrowserRouter } from "react-router";
import { DefaultLayout } from "./layouts/defaultLayout/DefaultLayout";
import { Home } from "pages/Home/Home";
import { appPaths } from "entities/Router";
import { TripItem } from "pages/TripItem";
import { MakeOrder } from "pages/MakeOrder";
import { LoginLayout } from "./layouts/loginLayout/LoginLayout";
import { Login } from "pages/Login";
import { AdminPanel } from "pages/AdminPanel/AdminPanel";

export const rootRouter = createBrowserRouter([{
    children: [
        {
            Component: DefaultLayout,
            children: [
                {
                    path: appPaths.home.$path,
                    Component: Home
                },
                {
                    path: appPaths.cart.$path,
                    Component: Cart
                },
                {
                    path: appPaths.cart.makeOrder.$path,
                    Component: MakeOrder
                },
                {
                    path: appPaths.tripsCatalog.$path,
                    Component: Home,
                },
                {
                    path: appPaths.tripsCatalog.trip.$path,
                    Component: TripItem
                },
                {
                    path: appPaths.admin.$path,
                    Component: AdminPanel

                }
            ]
        },
        {
            Component: LoginLayout,
            children: [
                {
                    path: appPaths.login.$path,
                    Component: Login,
                }
            ]
        }
    ]
}])