import React from "react";

export default function CartColumms() {
    return (
        <div className="container-fluid text-center d-none d-lg-block my-5">
            <div className="row">
                {/* single */}
                <div className="col-lg-2">
                    <p className="text-uppercase">product</p>
                </div>
                {/* single */}
                <div className="col-lg-2">
                    <p className="text-uppercase">Name of product</p>
                </div>
                {/* single */}
                <div className="col-lg-2">
                    <p className="text-uppercase">price</p>
                </div>
                {/* single */}
                <div className="col-lg-2">
                    <p className="text-uppercase">quantity</p>
                </div>
                {/* single */}
                <div className="col-lg-2">
                    <p className="text-uppercase">remove</p>
                </div>
                {/* single */}
                <div className="col-lg-2">
                    <p className="text-uppercase">total</p>
                </div>
            </div>
        </div>
    );
}
