import React from 'react'
import "./Footer.css";
import { Container } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';



const Footers = () => {
    return (
        <div className="main-footer">
            <Container>
                <div className="container">
                    <div className="row">
                        {/* Column1 */}
                        <div className="col">
                            <section className="container">
                                <div className="">
                                    <h4>QA Cinema</h4>
                                    <ul className="list-unstyled">
                                        <li>8, St James's Bldg</li>
                                        <li>61-95 Oxford St</li>
                                        <li>Manchester, M1 6FQ</li>
                                        <li>+44 (0)345 074 7995</li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                        {/* Column2 */}
                        <div className="col">
                            <section className="container">
                                <div className="">
                                <h4>Links</h4>
                                    <ul className="list-unstyled">
                                    
                                        <li><a href={"/"} className="link">Home Page</a></li>
                                        <li><a href={"/aboutpage"}className="link">About US</a></li>
                                        <li><a href={"/contactpage" } className="link">Contact US</a></li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                        {/* Column3 */}
                        <div className="col">
                            <section className="container">
                                <div className="center">
                                    <h4>Legal</h4> 
                                    <ul className="list-unstyled">
                                        <li>Terms & conditions</li>
                                        <li>Accessibility</li>
                                        <li>Allergens and Nutrition</li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                        <div className="col">
                            <section className="container">
                                <div className="center">
                                    <h4>Socials</h4>
                                    <ul className="list-unstyled">
                                    
                                        <li><a href="https://github.com/Shameer28/QA-Cinemas" className="link"><SocialIcon network="github" bgColor="#808080" />Github</a></li>
                                        <li><a href="https://twitter.com/" className="link"><SocialIcon network="twitter" bgColor="#0099ff" /> Twitter</a></li>
                                        <li><a href="https://www.facebook.com/" className="link"><SocialIcon network="facebook" bgColor="#0066ff" />Facebook</a></li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* <div>
                        <img src={image1} alt="logo" className="rounded mx-auto d-block" width="10%"></img>
                    </div> */}
                    <hr />
                    <div className="row">
                        <div className="center">
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