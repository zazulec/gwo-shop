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

