import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Success from "./pages/Success";
import MainLayout from "./layouts/MainLayout";


function MainRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route element={<Home />} path="/" />
                <Route element={<Cart />} path="/cart" />
                <Route element={<Product />} path="/product/:id" />
                <Route element={<Success />} path="/success" />
            </Route>
        </Routes>
    )
}

export default MainRoutes;