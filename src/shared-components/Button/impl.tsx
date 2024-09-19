import React from 'react';
import './styles.sass';
import { ButtonProps } from './types';

export const Button = ({ children, hasShadow, hasSpecialHover }: ButtonProps) => {

    const button_type = [
        'btn',
        hasShadow ? 'btn-shadow' : '',
        hasSpecialHover ? 'btn-special-hover' : ''
    ].join(' ');

    return (
        <button className={button_type}>{children}</button>
    );

}