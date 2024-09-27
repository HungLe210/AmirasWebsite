import React from 'react';
import '../tu-van-loyalty-marketing/styles.sass';
import { ServiceCard, ServiceCardItem } from '@shared-components/Card';
import { SmallBanner } from '@shared-components/Banner/SmallBanner';
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
			<SmallBanner title='Đào tạo Public Loyalty Marketing'/>
			
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
