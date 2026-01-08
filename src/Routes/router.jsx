import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

import Home from "../Pages/Home/home";
import Sobre from "../Pages/Sobre/sobre";
import Galeria from "../Pages/Galeria/galeria";

function RouterApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/galeria" element={<Galeria/>}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
        
    )
}


export default RouterApp