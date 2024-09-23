import React from 'react';
import { Button } from '@shared-components';
import { Metadata } from 'next';
import './styles.sass';

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
                            a
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