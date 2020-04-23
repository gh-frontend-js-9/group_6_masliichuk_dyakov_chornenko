import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";

interface IProps {
    slidesCount: number;
}

class SimpleSlider extends React.Component<IProps> {

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: this.props.slidesCount,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1200,
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
                            <Link to="/Author" className={'slider-title-home'}>Sales</Link>
                    </div>
                    <div className={'data-simple-slider'}>
                        <img
                            src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                            alt={'ITstep'}/>
                            <Link to="/Author" className={'slider-title-home'}>UI design</Link>
                    </div>
                    <div className={'data-simple-slider'}>
                            <img
                                src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                                alt={'ITstep'}/>
                            <Link to="/Author" className={'slider-title-home'}>SEO</Link>
                    </div>
                    <div className={'data-simple-slider'}>
                            <img
                                src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                                alt={'ITstep'}/>
                        <Link to="/Author" className={'slider-title-home'}>Popular</Link>
                    </div>
                    <div className={'data-simple-slider'}>
                            <img
                                src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                                alt={'ITstep'}/>
                        <Link to="/Author" className={'slider-title-home'}>Essentials</Link>
                    </div>
                    <div className={'data-simple-slider'}>
                        <img
                            src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                            alt={'ITstep'}/>
                        <Link to="/Author" className={'slider-title-home'}>Marketing</Link>
                    </div>
                    <div className={'data-simple-slider'}>
                        <img
                            src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                            alt={'ITstep'}/>
                        <Link to="/Author" className={'slider-title-home'}>QA</Link>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default SimpleSlider;