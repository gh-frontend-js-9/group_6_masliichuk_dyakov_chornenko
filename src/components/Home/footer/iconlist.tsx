import React from "react";
import {navigationIconMedia} from "../../data/data";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const IconList = () => {

    return (
        <div className={'footer-item'}>
            <ul className={'footer-list-icon'}>
                {navigationIconMedia.map(value =>
                    <li className={'footer-icon'}>
                        <a href={value.url}>
                            <FontAwesomeIcon icon={value.image} className={'style-icon'}/>
                        </a>

                    </li>)}
            </ul>
        </div>
    )
}