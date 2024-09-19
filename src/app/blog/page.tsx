import React from 'react'
import { Button } from '@shared-components';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog'
}
const BlogPage = () => {
    return (
        <section>
            <div className='blog-header'>
                <div className='banner'>
                </div>
                <Button>Demo sản phẩm</Button>
            </div>
        </section>
    )
}

export default BlogPage