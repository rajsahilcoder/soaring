import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer id="Footer">
                    <div class="content">
                        <div class="left box">
                            <div>
                                <div class="topic">Contact us</div>
                                <div class="phone">
                                    <a href="#"><i class="fas fa-phone-volume"></i>12321312</a>
                                </div>
                                <div class="email">
                                    <a href="#"><i class="fas fa-envelope"></i>abc@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div class="middle box">
                            <div class="topic">Our Services</div>
                            <div><a href="#">Aerodynamics</a></div>
                            <div><a href="#">Quadcopter</a></div>
                        </div>
                        <div class="right box">
                            <div class="topic">Subscribe us</div>
                            <form action="#">
                                <div class="media-icons">
                                    <a href="#"><img src="fb.png" alt="Facebook" height="40px" width="40px" /></a>
                                    <a href="#"><img src="insta.jpg" alt="Instagram" height="40px" width="40px" /></a>
                                    <a href="#"><img src="twit.png" alt="Twitter" height="40px" width="40px" /></a>
                                    <a href="#"><img src="youtube.jpg" alt="Youtube" height="40px" width="40px" /></a>

                                </div>
                            </form>
                        </div>
                    </div>

                </footer>
            </React.Fragment >
        );
    }
}