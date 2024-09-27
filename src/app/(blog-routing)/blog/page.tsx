import React from 'react';
import { Metadata } from 'next';
import './styles.sass';
import Link from 'next/link';
import { BlogCard } from '@shared-components/Card';
import { BlogSideBar } from '../_components';
import { CardProps } from '@shared-components/Card/BlogCard/types';

export const metadata: Metadata = {
    title: 'Blog',
};
export default function BlogPage() {
    const blogCards: CardProps[] = [
        {
            img: '/assets/Blog/Blog_2.png',
            category: 'Thể loại 1',
            content: 'Tiêu đề chính',
            title: 'Đây là một đoạn mô tả ngắn gọn về nội dung của card này.',
        },
        {
            img: '/assets/Blog/Blog_2.png',
            category: 'Thể loại 1',
            content: 'Tiêu đề chính',
            title: 'Đây là một đoạn mô tả ngắn gọn về nội dung của card này.',
        },
        {
            img: '/assets/Blog/Blog_2.png',
            category: 'Thể loại 1',
            content: 'Tiêu đề chính',
            title: 'Đây là một đoạn mô tả ngắn gọn về nội dung của card này.',
        },
    ];
    return (
        <section>
            <div className="blog-header">
                <div className="container">
                    <Link href="/blog">
                        <h1>Blog</h1>
                    </Link>
                    <div className="blog-content">
                        <BlogSideBar />

                        <div className="blog-posts">
                            {blogCards.map((card, index) => {
                                return (
                                    <BlogCard
                                        key={index}
                                        item={card}
                                    />
                                );
                            })}


                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

