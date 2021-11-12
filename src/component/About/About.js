import React from 'react';
import rowImg from '../../image/row-image.png'
import './About.css'

const About = () => {
    return (
        <div>
            <div className=" my-5 mx-2">
                <div className="row d-flex justify-content-center align-items-center pt-5 mx-3">
                    {/* image section  */}
                    <div className="col-6">
                        <div className="row">
                            {/* 1st image  */}
                            <div className="col-4">
                                <div className="row">
                                    <img src={rowImg} alt="image_1st" className="img-fluid" />
                                </div>
                                <div className="row">
                                    <div className="other-than-image"></div>
                                </div>
                                <div className="row">
                                    <div className="other-than-image"></div>
                                </div>

                            </div>
                            {/* 2nd imafge  */}
                            <div className="col-4">
                                <div className="row">
                                    <div className="other-than-image"></div>
                                </div>
                                <div className="row">
                                    <img src={rowImg} alt="" className="" />
                                </div>
                                <div className="row">
                                    <div className="other-than-image"></div>
                                </div>
                            </div>
                            {/* 3rd image  */}
                            <div className="col-4">
                                <div className="row">
                                    <div className="other-than-image"></div>
                                </div>
                                <div className="row">
                                    <div className="other-than-image"></div>
                                </div>
                                <div className="row">
                                     <img src={rowImg} alt="" className="img-fluid" />
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* About Section  */}
                    <div className="col-6 d-flex justify-content-center align-items-center ps-5">
                        <div>
                            <h2 className="mb-5 pb-3">About  US</h2>
                             <p>
                              Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;