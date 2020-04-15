import React from "react";

export const ElementSubscribe = () => {

    return (
        <section className={'container container-subscribe'}>
            <div>
                <h2>
                    Get free web design insights...
                </h2>
                <p>
                    In your inbox, every other week. And unsubscribe in a click, if you want.
                </p>
                <div className={'strange-button'}>
                    <input placeholder={'Your email'}/><button>Subscribe</button>
                </div>
            </div>
        </section>

    )
}