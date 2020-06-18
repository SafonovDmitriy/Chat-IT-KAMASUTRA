import React from 'react';
import s from './FormsControls.module.css';
export const Input = ({ input, meta, ...props }) => {
    const showError = meta.touched && meta.error
    return (
        <div className={showError?s.boxError:s.box}>
            <input type="text"
                {...input} {...props}
            />
            <div className={s.error}> {showError && <span >{meta.error}</span>}</div>

        </div>
    )


}

export const CheckBox = ({ input, meta, ...props }) => {
    return (<div>
        <input type="checkbox" {...input}{...props} />{props.customText}
    </div>)
}