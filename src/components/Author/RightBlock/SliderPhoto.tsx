import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {faArrowLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class SimpleSlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            slickNext: <FontAwesomeIcon icon={faChevronRight}/>,
            slickPrev: <FontAwesomeIcon icon={faChevronRight}/>,
        };
        return (
            <div className={'container-slider'}>
                <Slider {...settings}>
                    <div className={'slide-style'}>
                        <img
                            src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                            alt={'ITstep'}/>
                    </div>
                    <div>
                        <img
                            src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                            alt={'ITstep'}/>
                    </div>
                    <div>
                        <img
                            src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                            alt={'ITstep'}/>
                    </div>
                    <div>
                        <img
                            src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                            alt={'ITstep'}/>
                    </div>
                    <div>
                        <img
                            src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                            alt={'ITstep'}/>
                    </div>
                    <div>
                        <img
                            src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                            alt={'ITstep'}/>
                    </div>
                </Slider>
                <h2>
                    Essentials
                </h2>
            </div>
        );
    }
}

export default SimpleSlider;