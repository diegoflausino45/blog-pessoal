import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

import Home from "../Pages/Home/home";


function RouterApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
        
    )
}


export default RouterApp