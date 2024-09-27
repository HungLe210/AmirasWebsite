'use client';
import Image from 'next/image';
import React from 'react';
import './styles.sass';
import { CardProps } from './types';

export function BlogCard({ item }: { item: CardProps }) {
	return (
		<div className='blog-card'>
			<div className='blog-card-image'>
				{item.img ? (
					<Image
						src={item.img}
						height={150}
						width={300}
						alt='Blog Image'
						objectFit="cover"
					/>
				) : (
					<div className="blog-card-placeholder">
						<p>No Image Available</p>
					</div>
				)}
			</div>
			<div className='blog-card-content'>
				<p className='blog-card-category'>{item.category}</p>
				<h3 className='blog-card-title'>{item.title}</h3>
				<div className='is-divider'></div>
				<p className='blog-card-description'>{item.content}</p>
			</div>
		</div>
	);
}
