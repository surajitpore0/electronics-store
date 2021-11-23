import React from "react";
import { FaTrash, FaMinusSquare, FaPlusSquare } from "react-icons/fa";

export default function CartItem({
    CartItem,
    increment,
    decrement,
    removeItem,
}) {
    const { id, title, price, count, total, image } = CartItem;

    return (
        <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
            {/* image */}
            <div className="col-10 mx-auto col-lg-2 pb-2">
                <img src={image} alt="product" width="60" />
            </div>
            {/* end of image */}

            {/* title */}
            <div className="col-10 mx-auto col-lg-2 pb-2">
                <span className="d-lg-none">product : </span>
                {title}
            </div>
            {/* end of title */}

            {/* price */}
            <div className="col-10 mx-auto col-lg-2 pb-2">
                <span className="d-lg-none">price : </span>
                {price}
            </div>
            {/* end of price */}

            {/* count controls */}
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <FaMinusSquare
                        onClick={() => decrement(id)}
                        className="text-primary cart-icon"
                    />
                    <span className="text-title text-muted mx-3">{count}</span>
                    <FaPlusSquare
                        onClick={() => increment(id)}
                        className="text-primary cart-icon"
                    />
                </div>
            </div>
            {/* end of count controls */}

            {/* trash */}
            <div className="col-10 mx-auto col-lg-2 pb-2">
                <FaTrash
                    className="text-danger cart-icon"
                    onClick={() => removeItem(id)}
                />
            </div>
            {/* end of trash */}

            <div className="col-10 mx-auto col-lg-2 pb-2">
                <strong className="text-muted">item total : {total}</strong>
            </div>
        </div>
    );
}
