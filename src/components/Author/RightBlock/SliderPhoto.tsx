import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IProps {
    slidesCount: number;
}

class SimpleSlider extends React.Component<IProps> {

    constructor(props: any) {
        super(props);
    }

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: this.props.slidesCount,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                    arrows: false
                  }
                },
                {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      dots: true,
                      arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false
                    }
                }                
            ]            
        };
        return (
            <div className={'container-slider'}>
                <Slider {...settings}>
                    <div className={'data-simple-slider'}>
                        <img
                            src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                            alt={'ITstep'}/>
                            <a href="#" className={'slider-title-home'}>Sales</a>
                    </div>
                    <div className={'data-simple-slider'}>
                        <img
                            src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                            alt={'ITstep'}/>
                            <a href="#" className={'slider-title-home'}>UI design</a>
                    </div>
                    <div className={'data-simple-slider'}>
                            <img
                                src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                                alt={'ITstep'}/>
                            <a href="#" className={'slider-title-home'}>SEO</a>
                    </div>
                    <div className={'data-simple-slider'}>
                            <img
                                src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                                alt={'ITstep'}/>
                        <a href="#" className={'slider-title-home'}>Popular</a>
                    </div>
                    <div className={'data-simple-slider'}>
                            <img
                                src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                                alt={'ITstep'}/>
                        <a href="#" className={'slider-title-home'}>Essentials</a>
                    </div>
                    <div className={'data-simple-slider'}>
                        <img
                            src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                            alt={'ITstep'}/>
                        <a href="#" className={'slider-title-home'}>Marketing</a>
                    </div>
                    <div className={'data-simple-slider'}>
                        <img
                            src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                            alt={'ITstep'}/>
                        <a href="#" className={'slider-title-home'}>QA</a>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default SimpleSlider;