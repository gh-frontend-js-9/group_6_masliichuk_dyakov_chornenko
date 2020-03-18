import React from 'react';
import logo from './../../assets/images/header/logo.png';
import search from './../../assets/images/header/search-icon.png';


export default class Header extends React.Component {
    render() {
        return (
            <div className="container header-container">
                <header className="header">
                    <div className="header__left">
                        <div className="header__logo">
                            <a href="#"><img src={logo} alt="logo" /></a>
                        </div>

                        <div className="header__nav">
                            <ul>
                                <li><a href="">Popular</a></li>
                                <li><a href="">New</a></li>
                                <li><a href="">Reading list</a></li>
                                <li><a href="">Topics</a></li>
                                <li><a href="">Subscribe</a></li>
                            </ul>
                        </div>
                    </div>


                    <div className="header__search">
                        <a href="#"><img src={search} alt="search" /></a>
                    </div>


                </header>

            </div>
        )

    }

}