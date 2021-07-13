import React from 'react'
import "./Footer.css";
import { Container } from 'react-bootstrap'
import image1 from './../img/Logo.png'
import { SocialIcon } from 'react-social-icons';



const Footers = () => {
    return (
        <div className="main-footer">
            <Container>
                <div className="container">
                    <div className="row">
                        {/* Column1 */}
                        <div className="col">
                            <section class="container">
                                <div class="">
                                    <h4>QA Cinema</h4>
                                    <ui className="list-unstyled">
                                        <li>8, St James's Bldg</li>
                                        <li>61-95 Oxford St</li>
                                        <li>Manchester, M1 6FQ</li>
                                        <li>+44 (0)345 074 7995</li>
                                    </ui>
                                </div>
                            </section>
                        </div>
                        {/* Column2 */}
                        <div className="col">
                            <section class="container">
                                <div class="">
                                    <h4>Links</h4>
                                    <ui className="list-unstyled">
                                        <a href={"/"} class="link"><li>Home Page</li></a>
                                        <a href={"/aboutpage"}class="link"><li>About US</li></a>
                                        <a href={"/contactpage" } class="link"><li>Contact US</li></a>
                                    </ui>
                                </div>
                            </section>
                        </div>
                        {/* Column3 */}
                        <div className="col">
                            <section class="container">
                                <div class="center">
                                    <h4>Legal</h4>
                                    <ui className="list-unstyled">
                                        <li>Terms & conditions</li>
                                        <li>Accessibility</li>
                                        <li>Allergens and Nutrition</li>
                                    </ui>
                                </div>
                            </section>
                        </div>
                        <div className="col">
                            <section class="container">
                                <div class="center">
                                    <h4>Socials</h4>
                                    <ui className="list-unstyled">
                                        <a href="https://github.com/Shameer28/QA-Cinemas" class="link"><li><SocialIcon network="github" bgColor="#ff5a01" />Github</li></a><br></br>
                                        <a href="https://twitter.com/" class="link"><li><SocialIcon network="twitter" bgColor="#ff5a01" /> Twitter</li></a><br></br>
                                        <a href="https://www.facebook.com/" class="link"><li><SocialIcon network="facebook" bgColor="#ff5a01" />Facebook</li></a>
                                    </ui>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* <div>
                        <img src={image1} alt="logo" class="rounded mx-auto d-block" width="10%"></img>
                    </div> */}
                    <hr />
                    <div className="row">
                        <div class="center">
                            <p className="col-sm">
                                &copy;{new Date().getFullYear()} QA Cinema | All rights reserved |
                                Terms Of Service | Privacy
                            </p>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
}
export default Footers;