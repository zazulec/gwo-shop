import React, { FC } from 'react';
import '../../scss/components/customButton/customButton.scss';

interface CustomButtonProps {
    title: string,
    onClick?: (data: any) => any,
    style?: {},
    buttonStyle?: {}
}

export const CustomButton: FC<CustomButtonProps> = ({ title, onClick, buttonStyle, style }) => {
    return (
        <div className={`customButton ${style}`}>
            <button
                className={`customButton_button ${buttonStyle}`}
                onClick={onClick}
            >
                {title}
            </button>
        </div>
    )
}

