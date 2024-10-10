import React from 'react';
import './styles.sass';
import { Button } from '@shared-components';
import { Carousel } from '@shared-components/Carousel';
import { Advertise, Difference, Difficult, Foundation, Newspaper } from './_components';
import { CustomerCard } from '@shared-components/Card';


export function Product() {
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
            <Carousel uniqueID={''} items={[]} ItemComponent={CustomerCard} shape={'circle'} isButton={false} />
            <Newspaper />
        </section>
    );
};
