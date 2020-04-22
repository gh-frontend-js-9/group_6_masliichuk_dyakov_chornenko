import React from "react";
import {IconList} from "../../footer/iconlist";
import profile from '../../../assets/images/newpage/backgr.png';

export const ElementAuthor: React.FC = () => {
    return (

        <div className={'container-author'}>
            <div>
                <img src={profile} alt={'profile'}/>

            </div>
            <h2>
                TOMAS LAURINAVICIUS
            </h2>

            <p>
                Hi, my name is Daniel, I'm the CTO <br/> here at Kinsta.
            </p>
            <IconList/>
        </div>

    )
};
