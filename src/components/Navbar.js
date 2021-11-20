import React from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import { ProductConsumer } from "../context/context";
import logo from "../images/logo.svg";

export default function Navbar() {
    return (
        <ProductConsumer>
            {(value) => {
                const { cartItem, handleSidebar, handleCart } = value;
                return (
                    <NavWrapper>
                        <div className="nav-center">
                            <FaBars
                                className="nav-icon"
                                onClick={handleSidebar}
                            />
                            <img src={logo} alt="logo" />
                            <div className="nav-cart">
                                <FaCartPlus
                                    className="nav-icon"
                                    onClick={handleCart}
                                />
                                <div className="cart-items">{cartItem}</div>
                            </div>
                        </div>
                    </NavWrapper>
                );
            }}
        </ProductConsumer>
    );
}

const NavWrapper = styled.nav`
    position: --webkit-sticky;
    position: sticky;
    top: 0;
    width: 100%;
    padding: 1rem 1.5rem;
    background: var(--mainGray);
    border-bottom: 2px solid var(--primaryColor);
    .nav-center {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1170px;
        margin: 0 auto;
    }
    .nav-icon {
        font-size: 1.5rem;
        cursor: pointer;
    }
    .nav-cart {
        position: relative;
    }
    .cart-items {
        position: absolute;
        background: var(--primaryColor);
        color: var(--mainWhite);
        top: -9px;
        right: -9px;
        padding: 0 5px;
        border-radius: 50%;
        font-size: 0.85rem;
    }
`;
