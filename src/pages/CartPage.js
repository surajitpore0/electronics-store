import React from "react";
import CartSection from "../components/CartPage";
import Hero from "../components/Hero";
import CartBcg from "../images/storeBcg.jpeg";

export default function CartPage(props) {
    return (
        <>
            <Hero img={CartBcg} />
            <CartSection history={props.history} />
        </>
    );
}
