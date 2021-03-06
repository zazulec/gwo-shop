import React, { FC } from 'react';
import { CustomButtonProps } from '../../helpers/interfaces/interfaces';
import '../../scss/components/customButton/customButton.scss';

export const CustomButton: FC<CustomButtonProps> = ({ title, onClick, buttonStyle, style }) => {
    return (
        <div className={`customButton `}
            style={style}
        >
            <button
                className={`customButton_button `}
                style={buttonStyle}
                onClick={onClick}
            >
                {title}
            </button>
        </div>
    )
}

