import React from 'react';
import { Button } from '@shared-components';
import { Metadata } from 'next';
import './styles.sass';
import { ServiceCard } from '@shared-components/Card/ServiceCard';

export const metadata: Metadata = {
	title: 'Dịch vụ',
};



const page = () => {
	const data: ServiceCardType = {
		category: {
			name: 'Tư vấn Loyalty Marketing',
			url: '#',
		},
		detailUrl: '#',
		title: 'Tư vấn chiến lược, thiết kế chương trình loyalty hiệu quả cho doanh nghiệp',
		img: '/assets/Service/Tu-van-Loyalty.png',
	};
	return (
		<section className="service">
			<div className="service-header">
				<div className="service-header-content">
					<h1>Dịch vụ</h1>
					<p>
						Cung cấp giải pháp chương trình Loyalty toàn diện để hỗ trợ doanh nghiệp hoàn thành các
						mục tiêu về doanh thu, truyền thông và trải nghiệm khách hàng.
					</p>
				</div>
			</div>

			<section>
				<div className='container'>
					<ServiceCard category={data.category} detailUrl={data.detailUrl} img={data.img} title={data.title}></ServiceCard>
					<ServiceCard category={data.category} detailUrl={data.detailUrl} img={data.img} title={data.title}></ServiceCard>
				</div>
			</section>
		</section>
	);
};

export default page;
