import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";


export const ElementSearch: React.FC = () => {
    return (

        <div className={'container-search'} id="cover">
            <form method="get" action="">
                <div className="tb">
                    <div className="td"><input type="text" placeholder={'Type something…'} required/></div>
                    <div className="td">
                        <button type="submit">
                            <span><FontAwesomeIcon icon={faSearch}/></span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}