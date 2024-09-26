import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './styles.sass';
import { CardProps } from './types';



export function BlogCard({ img = '/assets/Blog/Blog_1.png', category, title, content }: CardProps) {
	return (
		<div className='blog-card'>
			<div className='blog-card-image'>
				<Image src={img} height={100} width={200} alt='blog-card Image' />
			</div>
			<div className='blog-card-content'>
				<p className='blog-card-category'>{category}</p>
				<h3 className='blog-card-title'>{title}</h3>
				<div className='is-divider'></div>
				<p className='blog-card-description'>{content}</p>
			</div>
		</div>
	);
};
