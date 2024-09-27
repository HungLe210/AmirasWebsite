
import React from 'react';
import './styles.sass';
import { Button } from '@shared-components';
import { Metadata } from 'next';
import { Carousel } from '@shared-components/Carousel';
import { Advertise, Difference, Difficult, Foundation, Newspaper } from './_components';
import { CustomerCard } from '@shared-components/Card';

export const metadata: Metadata = {
    title: 'Sản phẩm'
};
export default function page() {
    return (
        <section className='product'>
            <section className='product-header'>
                <div className='product-header-content'>
                    <div className='product-header-item'>
                        <Button hasShadow>Đăng ký tư vấn</Button>
                        <Button hasShadow isYellow>Demo phần mềm</Button>
                    </div>

                </div>
            </section>
            <Difficult />
            <Advertise />
            <Foundation />
            <Difference />
            <Carousel uniqueID={''} items={[]} ItemComponent={CustomerCard} shape={''} />
            <Newspaper />
        </section>
    )
};

