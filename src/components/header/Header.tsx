import React, { SyntheticEvent } from 'react';
import logo from './../../assets/images/header/logo.png';
import search from './../../assets/images/header/search-icon.png';
import {Link} from "react-router-dom";

interface IProps {
    plain: boolean;
}

interface IState {
    isOpen: boolean;
    menuItems: Object[];
}

export default class Header extends React.Component<IProps, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false,
            menuItems: [
                { title: 'Home', url: '/' },
                { title: 'Post', url: '/post/1' },
                { title: 'Author', url: '/Author' },
            ]
        };
    }

    handleClick = (e: SyntheticEvent) => {
        e.preventDefault();
        if (this.state.isOpen) {
            this.setState({isOpen: false});
        } else {
            this.setState({isOpen: true});
        }
    }

    render() {
        return (
            <header className="container header-container">
                <div className={ this.props.plain ? 'header header--plain' : 'header' }>
                    <div className="header__left">
                        <div className="header__logo">
                            <Link to="/"><img src={logo} alt="logo" /></Link>
                        </div>

                        <div className={this.state.isOpen ? 'header__nav header__nav--open' : 'header__nav'}>
                            <ul>
                                {this.state.menuItems.map((item: any, index) => {
                                    return <li key={index}>
                                        <Link to={item.url}>{item.title}</Link>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>


                    <div className="header__search">
                        <a href="/"><img src={search} alt="search" /></a>
                    </div>

                    <div className="header__toggle">
                        <a href="/" onClick={this.handleClick} >
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