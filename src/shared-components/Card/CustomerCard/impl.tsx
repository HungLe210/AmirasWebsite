'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './styles.sass';
import { CustomerCardType } from './types';

const CustomerCard : React.FC<{ item: CustomerCardType }> = ({
	item
}) => {
	return (
		<Link href={'#'} className="card-link">
			<Image
				className="card-image"
				src={item.cardImage}
				width={240}
				height={135}
				alt=""
			/>
			<div className="card-contents">
				<h5 className="card-title">{item.cardTitle}</h5>
				<p className="card-description">
					{item.cardDescription}
				</p>
				<button className="card-button">{item.cardButton}</button>
			</div>
		</Link>
	);
};

export default CustomerCard;
