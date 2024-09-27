import React from 'react';
import './styles.sass';
import { Carousel } from '@shared-components/Carousel';

export function ChildBlog() {
    return (
        <section className='childblog'>
            <Carousel uniqueID='event' shape='circle' />
        </section>
    )
};