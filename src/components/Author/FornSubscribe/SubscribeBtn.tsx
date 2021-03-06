import React from "react";

export const ButtonSubscribe = () => {

    return (
        <div className={'subscribe-form'}>
            <form>
                <input type={'email'} pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}" minLength={5}
                       maxLength={24} placeholder={'Your email'}/>
                <button>Subscribe</button>
            </form>
        </div>
    )
}