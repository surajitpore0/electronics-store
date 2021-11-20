import React from "react";
import styled from "styled-components";
import mainBcg from "../images/mainBcg.jpeg";

export default function Hero({ img, title, max, children }) {
    return (
        <HeroWrapper>
            <div className="banner">
                <h1 className="tittle">{title}</h1>
                {children}
            </div>
        </HeroWrapper>
    );
}

const HeroWrapper = styled.div``;
