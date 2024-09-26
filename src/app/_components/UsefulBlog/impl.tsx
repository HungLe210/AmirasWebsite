'use client';
import { Button } from '@shared-components';
import Link from 'next/link';
import React, { useRef } from 'react';
import Image from 'next/image';
import './styles.sass';
import { BlogCard } from '@shared-components/Card';

export function UsefulBlog() {
    const scrollRef = useRef<HTMLDivElement | null>(null); // Khai báo kiểu cho scrollRef
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <section className='u_blog'>
            <div className='u_blog-board'>
                <h2>BLOG HỮU ÍCH</h2>
                <div className='u_blog-list' ref={scrollRef}>
                    <BlogCard
                        img='/assets/Blog/Blog_2.png'
                        category="Thể loại 1"
                        title="Tiêu đề chính"
                        content="Đây là một đoạn mô tả ngắn gọn về nội dung của card này."
                    />
                    <BlogCard
                        img='/assets/Blog/Blog_3.png'
                        category="Thể loại 1"
                        title="Tiêu đề chính"
                        content="Đây là một đoạn mô tả ngắn gọn về nội dung của card này."
                    />
                    <BlogCard
                        img='/assets/Blog/Blog_2.png'
                        category="Thể loại 1"
                        title="Tiêu đề chính"
                        content="Đây là một đoạn mô tả ngắn gọn về nội dung của card này."
                    />
                    <BlogCard
                        img='/assets/Blog/Blog_3.png'
                        category="Thể loại 1"
                        title="Tiêu đề chính"
                        content="Đây là một đoạn mô tả ngắn gọn về nội dung của card này."
                    />
                    <BlogCard
                        img='/assets/Blog/Blog_2.png'
                        category="Thể loại 1"
                        title="Tiêu đề chính"
                        content="Đây là một đoạn mô tả ngắn gọn về nội dung của card này."
                    />
                </div>
                <button className='scroll-left' onClick={scrollLeft}>←</button>
                <button className='scroll-right' onClick={scrollRight}>→</button>
            </div>
        </section>
    );
}
