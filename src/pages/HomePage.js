import React from "react";
import { ProductConsumer } from "../context";

export default function HomePage() {
    // open cart
    return (
        <>
            <ProductConsumer>
                {(value) => {
                    console.log(value);
                    return <h1>hello from the home page</h1>;
                }}
            </ProductConsumer>
        </>
    );
}
