import React from "react";
import {emit} from "cluster";

export const ButtonSubscribe = () => {

    return (
                <div className={'strange-button'}>
                    <form>
                        <input type={'email'} pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"  minLength={5} maxLength={24} placeholder={'Your email'}/><button>Subscribe</button>
                    </form>
                </div>
    )
}