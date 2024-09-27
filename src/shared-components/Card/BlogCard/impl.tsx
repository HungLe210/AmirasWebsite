'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './styles.sass';
import { CardProps } from './types';

export const BlogCard:React.FC<{item: CardProps}> = ({item}) =>{
	return (
		<div className='blog-card'>
			<div className='blog-card-image'>
				<Image src={item.img} height={100} width={200} alt='blog-card Image' />
			</div>
			<div className='blog-card-content'>
				<p className='blog-card-category'>{item.category}</p>
				<h3 className='blog-card-title'>{item.title}</h3>
				<div className='is-divider'></div>
				<p className='blog-card-description'>{item.content}</p>
			</div>
		</div>
	);
};
