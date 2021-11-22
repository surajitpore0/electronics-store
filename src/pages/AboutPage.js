import React from "react";
import Hero from "../components/Hero";
import Info from "../components/AboutPage/Info";
import { Link } from "react-router-dom";
import aboutBcg from "../images/aboutBcg.jpeg";

export default function AboutPage() {
    return (
        <>
            <Hero img={aboutBcg} />
            <Info />
        </>
    );
}
