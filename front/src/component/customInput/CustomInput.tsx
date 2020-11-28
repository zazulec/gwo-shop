import React, { FC } from 'react';
import '../../scss/components/customInput/customInput.scss';
import { CustomLoginProps } from '../../helpers/interfaces/interfaces';

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
