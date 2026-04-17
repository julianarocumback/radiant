import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Testemunhos from "./components/testemunhos/Testemunhos";
import Footer from "./components/footer/Footer";
import NewsLetter from "./components/newsLetter/NewsLetter";

export default function App(){
    return (
        <>
            <Header/>
            <Hero/>
            <Testemunhos/>
            <NewsLetter/>
            <Footer/>
        </>
    )
}