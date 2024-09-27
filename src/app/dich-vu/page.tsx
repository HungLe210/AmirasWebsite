import React from 'react';
import { Button } from '@shared-components';
import { Metadata } from 'next';
import './styles.sass';
import { ServiceCard } from '@shared-components/Card/ServiceCard';
import Link from 'next/link';
import Image from 'next/image';
import { SmallBanner } from '@shared-components/Banner/SmallBanner';
import { ServiceCardType } from '@shared-components/Card/ServiceCard/types';

export const metadata: Metadata = {
	title: 'Dịch vụ',
};

const data: ServiceCardType[] = [
	{
		category: {
			name: 'Tư vấn Loyalty Marketing',
			url: '/dich-vu/tu-van-loyalty-marketing',
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
	{
		category: {
			name: 'Đào tạo nội bộ Loyalty Marketing',
			url: '/dich-vu/dao-tao-noi-bo-loyalty-marketing',
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
	{
		category: {
			name: 'Đào tạo Public Loyalty Marketing',
			url: '/dich-vu/dao-tao-public-loyalty-marketing',
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
		],
	},
];

const BannerData = {
	title: 'Dịch vụ',
	content:
		'Cung cấp giải pháp chương trình Loyalty toàn diện để hỗ trợ doanh nghiệp hoàn thành các mục tiêu về doanh thu, truyền thông và trải nghiệm khách hàng.',
};

const page = () => {
	return (
		<section className="service">
			<SmallBanner title={BannerData.title} content={BannerData.content} />
			<section>
				<div className="container">
					{data.map((item, index) => {
						return (
							<div key={index}>
								<div className="service-category" key={index}>
									<p>Dịch vụ</p>
									<div className="service-category-content">
										<Link href={item.category.url}>
											<h2>{item.category.name}</h2>
										</Link>
										<Button>
											<span>xem tất cả</span>
											<Image
												className="icon"
												color="white"
												src={'/assets/next-white.png'}
												height={8}
												width={8}
												alt=""
											/>
										</Button>
									</div>
								</div>

								{
									<div className="service-card-list">
										{item.items.map((service, index) => {
											return <ServiceCard key={index} item={service}></ServiceCard>;
										})}
									</div>
								}
							</div>
						);
					})}

					{/* <ServiceCard
						category={data.category}
						detailUrl={data.detailUrl}
						img={data.img}
						title={data.title}
					></ServiceCard> */}
				</div>
			</section>
		</section>
	);
};

export default page;
