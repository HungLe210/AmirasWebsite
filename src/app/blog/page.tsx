import React from 'react';
import { Button } from '@shared-components';
import { Metadata } from 'next';
import './styles.sass';
import Link from 'next/link';



export const metadata: Metadata = {
    title: 'Blog'
}
const BlogPage = () => {
    return (
        <section>
            <div className='blog-header'>

                <div className='container'>
                    <h1>Blog</h1>
                    <div className='blog-content'>
                        <div className='blog-sidebar'>
                            <ul>
                                <li>
                                    <Link href=''>BLOG HỮU ÍCH</Link>

                                    <ul>
                                        <li><Link href=''>Bài viết hữu ích 1</Link></li>
                                        <li><Link href=''>Bài viết hữu ích 2</Link></li>
                                        <li><Link href=''>Bài viết hữu ích 3</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href=''>BÀI VIẾT NỔI BẬT</Link>

                                    <ul>
                                        <li><Link href=''>Bài viết nổi bật 1</Link></li>
                                        <li><Link href=''>Bài viết nổi bật 2</Link></li>
                                        <li><Link href=''>Bài viết nổi bật 3</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className='blog-posts'>
                            b
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default BlogPage