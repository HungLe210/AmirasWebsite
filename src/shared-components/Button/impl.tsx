import React from 'react';
import './styles.sass';
import { ButtonProps } from './types';

export const Button = ({ children, hasShadow, hasSpecialHover, isYellow }: ButtonProps) => {

    const button_class = [
        'btn',
        hasShadow ? 'btn-shadow' : '',
        hasSpecialHover ? 'btn-special-hover' : '',
        isYellow ? 'btn-yellow' : ''
    ].join(' ');

    return (
        <button className={button_class}>{children}</button>
    );

}