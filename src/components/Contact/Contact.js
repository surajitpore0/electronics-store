import React from "react";
import Title from "../Title";

export default function Contact() {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="contact us" />
                    <form className="mt-5">
                        {/* first */}
                        <div className="form-group mt-3">
                            <input
                                type="text"
                                name="firstName"
                                className="form-control"
                                placeholder="Ram Roy"
                            />
                        </div>

                        {/* email */}
                        <div className="form-group mt-3">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="ramroy@email.com"
                            />
                        </div>
                        {/* subject */}
                        <div className="form-group mt-3">
                            <input
                                type="text"
                                name="text"
                                className="form-control"
                                placeholder="important!!!"
                            />
                        </div>

                        {/* message */}
                        <div className="form-group mt-3">
                            <textarea
                                name="message"
                                id=""
                                className="form-control"
                                rows="10"
                                placeholder="hello there buddy"
                            ></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
