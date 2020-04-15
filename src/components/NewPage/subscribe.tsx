import React from "react";
import {ButtonSubscribe} from "./btnsubscribe";

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
                <ButtonSubscribe/>
            </div>
        </section>

    )
}