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
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/success" element={<Success />} />
            </Route>
        </Routes>
    )
}

export default MainRoutes;