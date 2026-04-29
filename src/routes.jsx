import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Testemunhos from "./components/testemunhos/Testemunhos";
import Footer from "./components/footer/Footer";
import NewsLetter from "./components/newsLetter/NewsLetter";
import Explorar from "./components/explorar/Explorar";
import Catalogo from "./components/catalogo/Catalogo";

import Produto from './pages/Produto'

export default function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Header/>
                    <Hero/>
                    <Catalogo/>
                    <Explorar/>
                    <Testemunhos/>
                    <NewsLetter/>
                    <Footer/>
                </>
            }/>

            <Route path='/livro/:id' element={<Produto/>}/>
        </Routes>
    )
}