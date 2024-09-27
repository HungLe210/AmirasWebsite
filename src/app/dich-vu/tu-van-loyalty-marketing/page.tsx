import React from 'react';
import './styles.sass';
import { ServiceCard, ServiceCardItem, ServiceCardType } from '@shared-components/Card';
import { Metadata } from 'next';
import { SmallBanner } from '@shared-components/Banner/SmallBanner';

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

			<SmallBanner title='Tư vấn Loyalty Marketing' />

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
