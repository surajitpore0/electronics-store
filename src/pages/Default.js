import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import defaultBcg from "../images/defaultBcg.jpeg";

export default function Default() {
    return (
        <>
            <Hero img={defaultBcg} title="404" max={true}>
                <h2 className="text-uppercase">page not found</h2>
                <Link to="/" className="main-link">
                    return home
                </Link>
            </Hero>
        </>
    );
}
