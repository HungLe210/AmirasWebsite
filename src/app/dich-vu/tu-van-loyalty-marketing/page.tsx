import React from 'react';
import './styles.sass';
import { ServiceCard, ServiceCardItem, ServiceCardType } from '@shared-components/Card';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Tư vấn Loyalty Marketing',
};

const page = () => {
	const data: ServiceCardItem[] = [
		{
			detailUrl: '#',
			title: 'Tư vấn chiến lược, thiết kế chương trình loyalty hiệu quả cho doanh nghiệp',
			img: '/assets/Service/Tu-van-Loyalty.png',
		},
		{
			detailUrl: '#',
			title: 'Tư vấn chiến lược, thiết kế chương trình loyalty hiệu quả cho doanh nghiệp',
			img: '/assets/Service/Tu-van-Loyalty.png',
		},
		{
			detailUrl: '#',
			title: 'Tư vấn chiến lược, thiết kế chương trình loyalty hiệu quả cho doanh nghiệp',
			img: '/assets/Service/Tu-van-Loyalty.png',
		},
	];
	return (
		<section className="service-section">
			<div className="service-section-header">
				<div className="service-section-header-content">
					<h1 className="service-section-title">Tư vấn Loyalty Marketing</h1>
				</div>
			</div>

			<section>
				<div className="container">
					<div className="service-card-list">
						{data.map((item, index) => {
							return <ServiceCard key={index} item={item}></ServiceCard>;
						})}
					</div>
				</div>
			</section>
		</section>
	);
};

export default page;
