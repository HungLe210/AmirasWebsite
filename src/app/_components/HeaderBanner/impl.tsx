import { Button } from '@shared-components';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import './styles.sass';

export function HeaderBanner() {
    return (
        <section className='banner'>
            <div className='banner-left'>
                <h2>Giải pháp toàn diện về</h2>
                <h1>Loyalty Marketing</h1>
                <h4>Tư vấn – Đào tạo – Nền tảng công nghệ</h4>
                <Link href='#sign_up_form'>
                    <Button hasShadow hasSpecialHover>
                        Đăng ký tư vấn
                    </Button>
                </Link>
            </div>
            <div className='banner-right'>
                <Image src='/assets/Banner-1-home-full.png' alt='' width={1118.33} height={594.31} />
            </div >
        </section>
    );
};

