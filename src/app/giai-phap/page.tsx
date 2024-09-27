import React from 'react'
import './styles.sass';
import { Button, CustomerCard } from '@shared-components';
import { Metadata } from 'next';
import Image from 'next/image'
import Link from 'next/link';
import { Carousel } from '@shared-components/Carousel';
<<<<<<< HEAD
import { Advertise, Difference, Difficult, Foundation, Newspaper } from './_components';
import { customerCards } from '@constants/mockData';

=======
import { Advertise, Difference, Difficult, Foundation, Newspaper } from '../san-pham/_components';
>>>>>>> 8f7071914b960fda223bd5e3ccf8c8c38f9ac664

export const metadata: Metadata = {
    title: 'Giải pháp'
}
export default function page ()  {
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
<<<<<<< HEAD
            <Carousel
				uniqueID="customer"
				items={customerCards}
				ItemComponent={CustomerCard}
				shape="retangle"
				title="KHÁCH HÀNG CỦA CHÚNG TÔI"
				isButton={false}
			/>
=======
            <Carousel uniqueID={''} />
>>>>>>> 8f7071914b960fda223bd5e3ccf8c8c38f9ac664
            <Newspaper />
        </section>
    )
}
