'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './styles.sass';
import { CustomerCardType } from './types';

const CustomerCard = ({
	cardTitle,
	cardButton,
	cardDescription,
	cardImage
}:CustomerCardType) => {
	return (
		<Link href={'#'} className="card-link">
			<Image
				className="card-image"
				src={cardImage}
				width={240}
				height={135}
				alt=""
			/>
			<div className="card-contents">
				<h5 className="card-title">{cardTitle}</h5>
				<p className="card-description">
					{cardDescription}
				</p>
				<button className="card-button">{cardButton}</button>
			</div>
		</Link>
	);
};

export default CustomerCard;
