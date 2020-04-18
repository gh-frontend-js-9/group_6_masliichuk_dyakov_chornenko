import React from "react";
import logoFooter from '../../../assets/images/footer/logofooter.png';
import {IconList} from "./iconlist";

export const Footer: React.FC = (props: any) => {


    return (
        <footer className={'footer-container container'}>
            <div className={'footer'}>
                <div className={'footer-logo'}>
                    <img src={logoFooter} alt={'logo'}/>
                </div>
                <IconList/>
                <div>

                    <p className={'footer-site-inform'}>
                        All Rights Reserved 2018 BehindMars
                    </p>
                </div>
            </div>
        </footer>

    )
};