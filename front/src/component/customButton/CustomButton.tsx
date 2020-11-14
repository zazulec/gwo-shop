import React, { FC } from 'react';
import '../../scss/components/customButton/customButton.scss';

interface CustomButtonProps {
    title: string,
    onClick: () => any,
}

export const CustomButton: FC<CustomButtonProps> = ({ title, onClick }) => {
    return (
        <div className="customButton">
            <button
                className="customButton_button"
                onClick={onClick}
            >
                {title}
            </button>
        </div>
    )
}

