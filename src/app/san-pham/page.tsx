import React from 'react'
import './styles.sass';
import { Button } from '@shared-components';
import { Metadata } from 'next';
import Image from 'next/image'
import Link from 'next/link';
import { Carousel } from '@shared-components/Carousel';
import { Advertise, Difference, Difficult, Foundation, Newspaper } from './_components';

export const metadata: Metadata = {
    title: 'Sản phẩm'
}
const page = () => {
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
            <Carousel />
            <Newspaper />
        </section>
    )
}

export default page