import React, { Component } from "react";
import styled from "styled-components";
import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";

export default class Services extends Component {
    state = {
        services: [
            {
                id: 1,
                icon: <FaDolly />,
                title: "free shopping",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, pariatur.",
            },
            {
                id: 2,
                icon: <FaRedo />,
                title: "7 days return policy",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, pariatur.",
            },
            {
                id: 3,
                icon: <FaDollarSign />,
                title: "secured payment",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, pariatur.",
            },
        ],
    };
    render() {
        return (
            <ServicesWrapper className="py-5">
                <div className="container">
                    <div className="row">
                        {this.state.services.map((item) => {
                            return (
                                <div
                                    className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3"
                                    key={item.id}
                                >
                                    <div className="services-icon">
                                        {item.icon}
                                    </div>

                                    <div className="mt-3 text-captalize">
                                        {item.title}
                                    </div>

                                    <div className="mt-3">
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </ServicesWrapper>
        );
    }
}

const ServicesWrapper = styled.section`
    background: rgba(95, 183, 234, 0.5);
    .services-icon {
        font-size: 2.5rem;
        color: var(--primaryColor);
    }
    p {
        color: var(--darkGrey);
    }
`;
