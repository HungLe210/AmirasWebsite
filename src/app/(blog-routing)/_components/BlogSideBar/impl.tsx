import Link from 'next/link';
import React from 'react';
import './styles.sass';
import Image from 'next/image';

export function BlogSideBar() {
    return (
        <div className='blog-sidebar'>
            <ul>
                <li><h2><Link href=''>BLOG HỮU ÍCH</Link></h2></li>

                <ul>
                    <li><Link href='#'>Loyalty Strategy</Link></li>
                    <li><Link href='#'>Loyalty Program</Link></li>
                    <li><Link href='#'>Loyalty Technology</Link></li>
                    <li><Link href='#'>Mobile Loyalty</Link></li>
                    <li><Link href='#'>Case study</Link></li>
                    <li><Link href='#'>Trải nghiệm khách hàng</Link></li>
                    <li><Link href='#'>Nội dung khác</Link></li>

                </ul>
            </ul>
            <ul className='post-list'>
                <li>
                    <h2><Link href=''>BÀI VIẾT NỔI BẬT</Link></h2></li>
                <ul>
                    <li>
                        <Image src='/assets/Blog/Blog_2.png' width={42} height={42} alt='' />
                        <Link href='#'>Tư vấn chiến lược, thiết kế chương trình loyalty hiệu quả cho doanh nghiệp</Link>
                    </li>
                    <li>
                        <Image src='/assets/Blog/Blog_3.png' width={42} height={42} alt='' />
                        <Link href='#'>Tư vấn chiến lược, thiết kế chương trình loyalty hiệu quả cho doanh nghiệp</Link>
                    </li>
                    <li>
                        <Image src='/assets/Blog/Blog_1.png' width={42} height={42} alt='' />
                        <Link href='#'>Tư vấn chiến lược, thiết kế chương trình loyalty hiệu quả cho doanh nghiệp</Link>
                    </li>

                </ul>

            </ul>
        </div>
    )
}
