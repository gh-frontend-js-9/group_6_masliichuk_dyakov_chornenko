import React from "react";
import logo from '../../assets/images/header/logo2.png'
import iconsearch from '../../assets/images/newpage/iconsearch.png'

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
                <p className={'inform-page-author'}><span>Home</span> — Tomas Laurinavicius</p>
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