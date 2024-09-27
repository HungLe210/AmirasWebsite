import React from 'react';
import './styles.sass';
import { Button } from '@shared-components';
import { Metadata } from 'next';
import { SmallBanner } from '@shared-components/Banner/SmallBanner';
import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';

export const metadata: Metadata = {
    title: 'Về Smart Loyalty'
};
export default function page() {
    return (
        <section className='about'>
            <SmallBanner title='Về Smart Loyalty'></SmallBanner>

            <div className='about-board'>
                <Image src='/assets/Product/2.png' width={500} height={500} alt='' />
                <div className='about-description'>
                    <span>VỀ SMART LOYALTY</span>
                    <h2>Smart Loyalty - Smart Choice</h2>
                    <p><strong>Smart Loyalty </strong>tự hào là đơn vị đầu tiên và hàng đầu tại Việt Nam cung cấp giải pháp toàn diện về Loyalty Marketing cho doanh nghiệp: tư vấn, đào tạo và phần mềm.</p>
                    <p>Với đội ngũ chuyên gia với trên 15 năm kinh nghiệm về Marketing, Loyalty Marketing và trải nghiệm khách hàng, chúng tôi nỗ lực mang đến những giải pháp phù hợp, hiệu quả cho doanh nghiệp với chi phí hợp lý nhất.</p>
                    <ul>
                        <li>Giải pháp toàn diện</li>
                        <li>Thực hiện bởi chuyên gia</li>
                        <li>Phù hợp doanh nghiệp Việt</li>
                        <li>Dễ dàng triển khai</li>
                    </ul>
                    <Button>Profile Smart Loyalty<IoIosArrowDown className='arrow' style={{ color: 'white' }} /></Button>
                </div>

            </div>
        </section>

    );
};

