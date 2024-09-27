import React, { useState } from 'react';
import './styles.sass'
import { Button } from '@shared-components';
import { LogFormProps } from './types';

export function LoginForm({ first_label, second_label, checkbox_label, button_label }: LogFormProps) {

    return (
        <form className="login-form">
            <div className="form-group">
                <label htmlFor="username">{first_label} *</label>
                <input
                    type="text"
                    id="username"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">{second_label} *</label>
                <input
                    type="password"
                    id="password"
                    required
                />
            </div>

            <div className="form-group remember-me">
                <input
                    type="checkbox"
                    id="rememberMe"
                    required
                />
                <label htmlFor="rememberMe">{checkbox_label} *</label>
            </div>
            <Button>{button_label}</Button>
        </form>
    );
};


