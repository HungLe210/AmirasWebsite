import React from 'react';
import './styles.sass';
import { BannerProps } from './types';

export function SmallBanner({ title, subTitle, content }: BannerProps) {
    return (
        <div className="small-banner">
            <div className="small-banner-content">
                <h1>{title}</h1>
                {subTitle && <h2>{subTitle}</h2>}
                {content && <p>{content}</p>}
            </div>
        </div>
    );
};
