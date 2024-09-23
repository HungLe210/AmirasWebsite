import React from 'react';
import { Button } from '@shared-components';
import { Metadata } from 'next';
import './styles.sass';

export const metadata: Metadata = {
    title: 'Hỗ trợ'
}
const page = () => {
    return (
        <section className='support'>
            <div className='service-header'>
                <div className='service-header-content'>
                    <h1>Hỗ trợ</h1>
                </div>
            </div>

            <section><div className='container'>A</div>
                <div className='container'>B</div>
                <div className='container'>C</div></section>
        </section>
    )
}

export default page