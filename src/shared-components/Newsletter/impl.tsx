'use client';
import React from 'react';
import './styles.sass';
import Image from 'next/image';
import SignUpCard from '@shared-components/SignUpCard/impl';
import { CircleCheckIcon } from '@constants/icons/icons';

export const Newsletter = () => (
    <section className='newsletter'>
        <div className='newsletter-content'>
            <div className='newsletter-details'>
                <p><strong>Smart Loyalty - Smart Choice</strong></p>
                <div>
                    <p>{CircleCheckIcon}Giải pháp toàn diện</p>
                    <p>{CircleCheckIcon}Phù hợp doanh nghiệpViệt</p>
                    <p>{CircleCheckIcon}Dễ dàng sử dụng</p>
                    <p>{CircleCheckIcon}Dễ đo lường, đánh giá hiệu quả</p>
                </div>
                <p>Sẵn sàng đồng hành và hỗ trợ doanh nghiệp!</p>
                <Image src='/assets/CRM_6.png' width={268} height={200} alt='' />
            </div>
            <div id='sign_up_form' className='newsletter-item'>
                <SignUpCard />
            </div>
        </div>
    </section>
);