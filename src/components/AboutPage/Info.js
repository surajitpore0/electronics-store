import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img
                            src={aboutBcg}
                            className="img-fluid img-thumbnail"
                            style={{ background: "var(--darkGrey)" }}
                            alt="about image"
                        />
                    </div>

                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title="about us" />
                        <p className="text-lead text-muted my-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aspernatur eius officiis cumque consectetur
                            mollitia repellat qui, distinctio fugiat omnis. Et
                            ipsum recusandae accusantium earum est magni
                            possimus at. Atque, assumenda?
                        </p>
                        <p className="text-lead text-muted my-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quasi ipsum, ex consectetur inventore minus
                            impedit maxime. Laudantium provident amet odit! Quam
                            cumque sed illo et nostrum ad labore reprehenderit
                            alias!
                        </p>

                        <button
                            className="main-link"
                            type="button"
                            style={{ marginTop: "2rem" }}
                        >
                            more info
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
