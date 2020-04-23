import React from "react";
import SimpleSlider from "../../Author/RightBlock/SliderPhoto";
import {Link} from "react-router-dom";

export const SliderHome = () => {
    return (
        <section className="slider-home" >
            <div className={'container'}>
                <div className={'cards-name-slider'}>
                    <h2 className={'cards-title-slider'}>
                        Reading lists
                    </h2>
                    <Link className={'cards-view-all-slider'} to="/Author">View all</Link>
                </div>

                <div className={'container-slider-home '}>
                    <SimpleSlider slidesCount={6} />
                </div>
            </div>
        </section>
    )
}