import React from "react";
import logoFooter from '../../assets/images/footer/logofooter.png';
import {navigationIconMedia} from "../data/data";

export const Footer: React.FC = (props: any) => {


    return (
        <footer>
            <div className={'footer-block container'}>
                <div className={'footer-logo'}>
                    <img src={logoFooter} alt={'logo'}/>
                </div>
                <div className={'footer-item'}>
                    <ul className={'footer-list-icon'}>
                        {navigationIconMedia.map(value =>
                            <li className={'footer-icon'}>
                                <a href={'#'}>
                                    <img src={value.image} alt={value.name}/>
                                </a>
                            </li>)}
                    </ul>
                </div>
                <div>

                    <p className={'footer-site-inform'}>
                        All Rights Reserved 2018 BehindMars
                    </p>
                </div>
            </div>
        </footer>

    )
};