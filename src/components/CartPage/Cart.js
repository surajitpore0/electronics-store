import React from "react";
import Title from "../Title";
import CartColumms from "./CartColumms";

import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default function Cart({ history }) {
    return (
        <section className="py-5">
            {/* title */}
            <div className="container">
                <Title title="your cart items" center />
            </div>
            <CartColumms />
            <CartList />
            <CartTotals history={history} />
        </section>
    );
}
