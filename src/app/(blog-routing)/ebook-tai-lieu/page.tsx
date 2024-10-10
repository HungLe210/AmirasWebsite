import React from 'react';
import { Metadata } from 'next';
import './styles.sass';
import Link from 'next/link';
import { BlogCard } from '@shared-components/Card';
import { BlogSideBar } from '../_components';



export const metadata: Metadata = {
    title: 'E-Book'
};
export default function BlogPage() {
    return (
        <section>
            <div className='blog-header'>
                <div className='container'>
                    <Link href='/blog'><h1>EBook</h1></Link>
                    <div className='blog-content'>
                        <BlogSideBar />

                        <div className='blog-posts'>
                            <BlogCard item={{
                                img: '',
                                category: 'Thể loại 1',
                                title: 'Tiêu đề chính',
                                content: 'Đây là một đoạn mô tả ngắn gọn về nội dung của card này.'
                            }} />
                            <BlogCard item={{
                                img: '',
                                category: 'Thể loại 1',
                                title: 'Tiêu đề chính',
                                content: 'Đây là một đoạn mô tả ngắn gọn về nội dung của card này.'
                            }} />
                            <BlogCard item={{
                                img: '',
                                category: 'Thể loại 1',
                                title: 'Tiêu đề chính',
                                content: 'Đây là một đoạn mô tả ngắn gọn về nội dung của card này.'
                            }} />
                            <BlogCard item={{
                                img: '',
                                category: 'Thể loại 1',
                                title: 'Tiêu đề chính',
                                content: 'Đây là một đoạn mô tả ngắn gọn về nội dung của card này.'
                            }} />
                        </div>


                    </div>
                </div>

            </div>
        </section>
    );
};

