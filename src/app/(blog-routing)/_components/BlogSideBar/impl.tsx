import Link from 'next/link';
import React from 'react';
import './styles.sass';

export function BlogSideBar() {
    return (
        <div className='blog-sidebar'>
            <ul>
                <li><h2><Link href=''>BLOG HỮU ÍCH</Link></h2></li>

                <ul>
                    <li><Link href=''>Bài viết hữu ích 1</Link></li>
                    <li><Link href=''>Bài viết hữu ích 2</Link></li>
                    <li><Link href=''>Bài viết hữu ích 3</Link></li>
                </ul>
            </ul>
            <ul className='post-list'>
                <li>
                    <h2><Link href=''>BÀI VIẾT NỔI BẬT</Link></h2>
                </li>
            </ul>
        </div>
    )
}
