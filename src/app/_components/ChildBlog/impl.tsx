import React from 'react';
import './styles.sass';
import { Carousel } from '@shared-components/Carousel';
import { CustomerCard } from '@shared-components';

export function ChildBlog() {
    return (
        <section className='childblog'>
            <Carousel uniqueID='event' shape='circle' items={[]} ItemComponent={CustomerCard} isButton={false} />
        </section>
    );
};