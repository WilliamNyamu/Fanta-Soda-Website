import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Products from "./Components/Products/Products";
import BannerText from "./Components/Products/Banner";
import Blogs from "./Components/Blogs/Blogs";
import Faq from "./Components/FAQ/faq";
import Footer from "./Components/Footer/Footer";
import Partners from "./Components/Partners/Partners";

const App = ()=> {
    return(
        <main className="overflow-x-hidden">
            <Hero />
            <Products />
            <BannerText />
            <Blogs />
            <Partners />
            <Faq />
            <Footer />
              
        </main>
    );
}
export default App;