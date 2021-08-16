import React, { Component } from 'react';
import Typed from 'typed.js';

export default class Header extends Component {
    componentDidMount() {
        const strings = ['Soaring Eagles', 'Space', 'Aerodynamics', 'Robotics', 'Drones', 'Science', 'Art'];
        const options = {
            strings: strings,
            typeSpeed: 150,
            backSpeed: 80,
            loop: true,
            loopCount: Infinity
        };
        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        this.typed.destroy();
    }
    render() {

        return (
            <React.Fragment>
                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#nav-wrap-close" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="/#home">Home</a></li>
                            <li><a className="smoothscroll" href="/#mission">Mission</a></li>
                            <li><a className="smoothscroll" href="/#portfolio">Work</a></li>
                            <li><a className="smoothscroll" href="/#photos">Team</a></li>
                            <li><a className="smoothscroll" href="/timeline#timeline">Timeline</a></li>
                            {/* <li id='testimonials_li'><a className="smoothscroll" href="#testimonials">Words</a></li> */}
                            {/* <li><a className="smoothscroll" href="#cooperations">Cooperators</a></li> */}
                            <li><a className="smoothscroll" href="#Footer">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="row banner">
                        <div className="banner-text">
                            <div className="wrap">
                                <h1 className="type-wrap">
                                    <span
                                        style={{ whiteSpace: 'pre' }}
                                        ref={(el) => { this.el = el; }}
                                    />
                                </h1>
                            </div>
                            <h3>
                                Vision of better World!
                            </h3>
                            Join Us!
                            <hr />
                            {/* <ul className="social">
                                {
                                    webData.socialLinks && webData.socialLinks.map(item => {
                                        return (
                                            <li key={item.name}>
                                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                                            </li>
                                        )
                                    })
                                }
                            </ul> */}
                        </div>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#mission" >
                        <i className="fas fa-angle-down"></i>
                        </a>
                    </p>
                </header>

            </React.Fragment>
        );
    }
}