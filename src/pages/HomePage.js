import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Featured from "../components/HomePage/Featured";
import Services from "../components/HomePage/Services";

export default function HomePage() {
    // open cart
    return (
        <>
            <Hero title="awesome gadgets" max="false">
                <Link
                    to="/products"
                    className="main-link"
                    style={{ margin: ".5rem" }}
                >
                    Our Products
                </Link>
            </Hero>
            <Services />
            <Featured />
        </>
    );
}
