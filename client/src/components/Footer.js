import React, { Component } from 'react';
import GithubLogo from './GithubLogo';



class Footer extends Component {


    render() {
        return (
            <div className="footer-mobile-catalog">
                <GithubLogo />
                <a className="footer-mobile-catalog-link" href="https://github.com/ElenaCerezoSwing" target="_blank">ElenaCerezoSwing</a>
            </div>
        );
    }

}
export default Footer;
