import React from 'react';
import "./styles.sass"
import { ServiceCard } from '@shared-components/Card/ServiceCard';
import { SmallBanner } from '@shared-components/Banner/SmallBanner';
import { ServiceCardType } from '@shared-components/Card/ServiceCard/types';
export default function page() {
	const data: ServiceCardType[] = [
		{
			category: {
				name: 'Tư vấn Loyalty Marketing',
				url: '#',
			},
			items: [
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
			],
		},

	];

	return (
		<section className="service-section">

			<SmallBanner title='Tư vấn Loyalty Marketing' />

			<section>
				<div className="container">
					{
						data.map((item, index) => {
							return (
								< ServiceCard key={index} category={item.category} items={item.items}></ServiceCard>
							)
						})
					}

				</div>
			</section>
		</section>
	);
};
