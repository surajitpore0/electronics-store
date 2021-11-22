import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Products from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProductPage";
import Default from "./pages/Default";
import Cart from "./pages/CartPage";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Sidecart from "./components/Sidecart";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            {/* navbar, sidebar, cart, footer*/}
            <Navbar />
            <Sidebar />
            <Sidecart />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" exact element={<Products />} />
                <Route path="/product/:id" exact element={<SingleProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/*" element={<Default />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
