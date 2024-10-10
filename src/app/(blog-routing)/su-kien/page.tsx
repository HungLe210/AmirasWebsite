import React from 'react';
import './styles.sass';
import { ServiceCard } from '@shared-components/Card';

export default function page() {
    return (
        <section className='event'>
            <section className='event-banner'>

            </section>
            <section className='event-soon'>
                <h2>SỰ KIỆN SẮP DIỄN RA</h2>
                <div className='event-soon-list'>
                    <ServiceCard item={{
                        img: '',
                        title: '',
                        detailUrl: '',
                        className: undefined
                    }} />
                </div>
            </section>
            <section className='event-past'>
                <h2>SỰ KIỆN ĐÃ DIỄN RA</h2>
            </section>

        </section>

    );
};
