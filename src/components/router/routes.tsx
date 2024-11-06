import { Route, Routes } from "react-router-dom";
import LoginPage from "@/pages/Login";
import RegisterPage from "@/pages/Register";
import Home from "@/pages/Home";
import Cliente from "@/pages/Cliente";
import  Fornecedor  from "@/pages/Fornecedor";
import Navbar from "../Navbar";

function CustomRoutes () {
    return (
        <Routes>
            <Route path="*" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/client" element={<Cliente />}/>
            <Route path="/fornecedor" element={<Fornecedor />}/>
        </Routes>
    )
}

export default CustomRoutes;