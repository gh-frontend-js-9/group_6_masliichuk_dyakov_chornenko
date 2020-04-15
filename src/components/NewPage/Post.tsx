import React from "react";

export default ({post}:any) => {
    return (
        <div className={'item-news'}>
            <div>
                <img src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'} alt={'ITstep'}/>
            </div>
            <h3 className={'post-item-title'}>
                <a href={''}>{post.title}</a>
            </h3>
        </div>
    )
}