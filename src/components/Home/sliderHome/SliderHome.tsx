import React from "react";
import SimpleSlider from "../../Author/RightBlock/SliderPhoto";

export const SliderHome = () => {
    return (
        <section className="slider-home" >
            <div className={'container'}>
                <div className={'cards-name-slider'}>
                    <h2 className={'cards-title-slider'}>
                        Reading lists
                    </h2>
                    <a className={'cards-view-all-slider'} href={'/Post'}>View all</a>
                </div>

                <div className={'container-slider-home '}>
                    <SimpleSlider slidesCount={6} />
                </div>
            </div>
        </section>
    )
}