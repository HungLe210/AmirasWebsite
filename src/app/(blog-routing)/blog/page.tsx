import React from 'react';
import { Button } from '@shared-components';
import { Metadata } from 'next';
import './styles.sass';
import Link from 'next/link';
import { BlogCard } from '@shared-components/Card';
import { BlogSideBar } from '../_components';



export const metadata: Metadata = {
    title: 'Blog'
}
export default function BlogPage() {
    return (
        <section>
            <div className='blog-header'>
                <div className='container'>
                    <Link href='/blog'><h1>Blog</h1></Link>
                    <div className='blog-content'>
                        <BlogSideBar />

                        <div className='blog-posts'>
                            <BlogCard category="Thể loại 1"
                                title="Tiêu đề chính"
                                content="Đây là một đoạn mô tả ngắn gọn về nội dung của card này." />
                            <BlogCard category="Thể loại 1"
                                title="Tiêu đề chính"
                                content="Đây là một đoạn mô tả ngắn gọn về nội dung của card này." />
                            <BlogCard category="Thể loại 1"
                                title="Tiêu đề chính"
                                content="Đây là một đoạn mô tả ngắn gọn về nội dung của card này." />
                            <BlogCard category="Thể loại 1"
                                title="Tiêu đề chính"
                                content="Đây là một đoạn mô tả ngắn gọn về nội dung của card này." />
                        </div>


                    </div>
                </div>

            </div>
        </section>
    )
}

