import React from "react";
import logo from '../../assets/images/header/logo2.png'
import iconsearch from '../../assets/images/newpage/iconsearch.png'
import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <div>
            <div className={'header-menu container'}>
                <ul className={'menu-header'}>
                    <li><img src={logo} alt={'logo-company'}/></li>
                    <li className={'item-menu'}><a href="../Topics">Popular</a></li>
                    <li className={'item-menu'}><a href={"../Author"}>New</a></li>
                    <li className={'item-menu'}><a href="../Topics">Reading list</a></li>
                    <li className={'item-menu'}><a href="../Topics">Topics</a></li>
                    <li className={'item-menu'}><a href="../Topics">Subscribe</a></li>
                </ul>
            </div>
            <div className={'container'}>
                <p className={'inform-page-author'}><Link to="/">Home</Link> — <Link to="/Author">Tomas Laurinavicius</Link></p>
            </div>
        </div>
    )
};

export const FieldSearch = () => {
    return(
        <div className={'container'}>
            <div className={'field-top-search'}><img src={iconsearch} alt={'search'}/> </div>
        </div>
    )
}