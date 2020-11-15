import React, { FC, useState } from 'react';
import '../../scss/components/inputComponent/inputComponent.scss';
import passwordIcon from '../../assets/passwordIcon.svg';

interface InputComponentProps {
    type: string,
    labelText: string,
    value: string,
    readOnly?: boolean,
}

export const InputComponent: FC<InputComponentProps> = ({ type, labelText, value, readOnly }) => {
    const [showPassword, setShowPassword] = useState(false);


    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="inputWrapper">
            <label>{labelText}</label>
            <div className="inputWrapper__wrapperInputAndIcon">
                <input
                    className="inputWrapper__wrapperInputAndIcon--input"
                    readOnly={readOnly}
                    type={
                        type === "password"
                            ? showPassword
                                ? "text"
                                : "password"
                            : type
                    }
                    value={value}
                >
                </input>
                {type === "password" ?
                    <img
                        src={passwordIcon}
                        onClick={handleShowPassword}
                        alt="visibility password icon"
                    /> : null}
            </div>
        </div >
    )
}
