import React, { SyntheticEvent } from 'react';
import logo from '../../../assets/images/header/logo.png';
import search from '../../../assets/images/header/search-icon.png';

interface IProps {}

interface IState {
    isOpen: boolean
}

export default class Header extends React.Component<IProps, IState> {

    constructor(props: any) {
        super(props);
        };



    render() {
        return (
            <header className="container header-container">
                <div className="header">
                    <div className="header__left">
                        <div className="header__logo">
                            <a href="../../Author"><img src={logo} alt="logo" /></a>
                        </div>

                        <div className= {'header__nav header__nav--open header__nav'}>
                            <ul>
                                <li><a href="../../Author">Popular</a></li>
                                <li><a href={"../../Author"}>New</a></li>
                                <li><a href="../../Author">Reading list</a></li>
                                <li><a href="../../Author">Topics</a></li>
                                <li><a href="../../Author">Subscribe</a></li>
                            </ul>
                        </div>
                    </div>


                    <div className="header__search">
                        <a href="../../Author"><img src={search} alt="search" /></a>
                    </div>

                    <div className="header__toggle">
                        <a href={"../NewPage"}>
                            <div className="header__hamburger" >
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </a>
                    </div>


                </div>
            </header>
        )

    }

}