import React from "react";
import {dataFilter} from "../../data/data";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const ElementFilter = () => {
    return (
        <div className={'container-filter'}>
            <ul>
                {dataFilter.map(value =>
      <li className={'filter-button'}>
                <button>{value.text} <FontAwesomeIcon icon={faTimes} className={'button-filter-icon'}/></button>
            </li>)}
            </ul>
        </div>
    )
};