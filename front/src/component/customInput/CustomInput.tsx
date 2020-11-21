import React, { FC } from 'react';
import '../../scss/components/customInput/customInput.scss';

interface CustomLoginProps {
    type: string,
    labelText: string,
    error?: string,
    saveValue: Function,
    toggleError: Function,
    value: string,
    messageError: string,

}

export const CustomInput: FC<CustomLoginProps> = ({ type, labelText, error, saveValue, value, messageError, toggleError }) => {

    return (
        <div className="customInput">
            <label className="customInput_label">{labelText}</label>
            <input
                className="customInput_input"
                type={type}
                onChange={(e) => saveValue(e.target.value)}
                value={value}
                onFocus={() => toggleError("")}
            >
            </input>
            {error === "error"
                ? <label className="customInput_errorLabel">{messageError}</label>
                : null}
        </div >
    )
}
