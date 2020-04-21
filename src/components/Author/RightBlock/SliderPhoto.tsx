import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class SimpleSlider extends React.Component {
    render() {

        const settings = {
            dots: true,
            container: 'data-simple-slider',
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className={'container-slider'}>
                <Slider {...settings}>
                    <div className={'data-simple-slider'}>
                        <img
                            src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                            alt={'ITstep'}/>
                            <h4 className={'slider-title-home'}>UI design</h4>
                    </div>
                    <div className={'data-simple-slider'}>
                            <img
                                src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                                alt={'ITstep'}/>
                            <h4 className={'slider-title-home'}>UI design</h4>
                    </div>
                    <div className={'data-simple-slider'}>
                            <img
                                src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                                alt={'ITstep'}/>
                        <h4 className={'slider-title-home'}>UI design</h4>
                    </div>
                    <div className={'data-simple-slider'}>
                            <img
                                src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                                alt={'ITstep'}/>
                        <h4 className={'slider-title-home'}>UI design</h4>
                    </div>
                    <div className={'data-simple-slider'}>
                        <img
                            src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                            alt={'ITstep'}/>
                        <h4 className={'slider-title-home'}>UI design</h4>
                    </div>
                    <div className={'data-simple-slider'}>
                        <img
                            src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                            alt={'ITstep'}/>
                        <h4 className={'slider-title-home'}>UI design</h4>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default SimpleSlider;