import React from 'react';
import './styles.sass';
import { ButtonProps } from './types';

export const Button = ({ children }: ButtonProps) => (
    <button className='btn'>{children}</button>
);

