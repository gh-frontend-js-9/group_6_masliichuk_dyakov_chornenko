import React from "react";
import iconsearch from '../../../assets/images/newpage/iconsearch.png'

export const ElementSearch: React.FC = () => {

    return (

        <div className={'container-search'} id="cover">
            <form method="get" action="">
                <div className="tb">
                    <div className="td"><input type="text" placeholder={'Type something…'} required/></div>
                    <div className="td">
                        <button type="submit">
                            <div><img src={iconsearch}/></div>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}