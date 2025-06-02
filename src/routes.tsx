import { Route, Routes } from "react-router-dom";
import App from "./App";

function MainRoutes() {
    return (
        <Routes>
            <Route element={<App/>} path="/"/>
        </Routes>
    )
}

export default MainRoutes;