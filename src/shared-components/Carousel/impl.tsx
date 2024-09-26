'use client';
import Link from 'next/link';
import './styles.sass';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CustomerCard from '@shared-components/Card/CustomerCard/impl';
import { Button } from '@shared-components';
import { CustomerCardType } from '@shared-components/Card/CustomerCard/types';

export const Carousel = ({uniqueID, shape="retangle"}:{
	uniqueID:string,
	shape?:string 
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	let cardButton = 'đọc thêm';
	let cardDescription =
		'Cung cấp sản phẩm cho vay tiêu dùng đa dạng như xe máy, ô tô, xe tải nhẹ, xe điện,hàng điện máy, điện thoại,...';
	let cardImage = '/assets/Home/hd-sai-gon-jpg.webp';
	let cardTitle = 'HD SAIGON';
	const totalPages = 2;

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
	};
	
	useEffect(() => {
		let group = document.querySelector<HTMLDivElement>(`#carousel-list-wrapper-${uniqueID}`);
		console.log(group)
		if (group) {
			group.style.transform = `translateX(-${currentIndex * 1020}px)`; // Adjust based on the current index
			console.log(group.style.transform);
		}
	}, [currentIndex]);

	const customerCards: CustomerCardType[] = [
		{
			cardButton: cardButton,
			cardDescription: cardDescription,
			cardImage: cardImage,
			cardTitle: cardTitle,
		},
		{
			cardButton: cardButton,
			cardDescription: cardDescription,
			cardImage: cardImage,
			cardTitle: cardTitle,
		},
		{
			cardButton: cardButton,
			cardDescription: cardDescription,
			cardImage: cardImage,
			cardTitle: cardTitle,
		},
		{
			cardButton: cardButton,
			cardDescription: cardDescription,
			cardImage: cardImage,
			cardTitle: cardTitle,
		},
		
	];
	return (
		<section className="customer">
			<h2>KHÁCH HÀNG CỦA CHÚNG TÔI</h2>
			<h3>Hàng trăm Doanh nghiệp tin dùng giải pháp Smart Loyalty</h3>
			<div className="carousel">
				<div className="carousel-list">
					<div className={`carousel-list-wrapper`} id={`carousel-list-wrapper-${uniqueID}`} >
						{Array.from({ length: 2 }, (item, index1) => {
							return (
								<div className="carousel-group" key={index1}>
									{customerCards.map((item, index) => {
										return (
											<CustomerCard
												key={index}
												cardButton={item.cardButton}
												cardDescription={item.cardDescription}
												cardImage={item.cardImage}
												cardTitle={item.cardTitle}
											></CustomerCard>
										);
									})}
								</div>
							);
						})}
					</div>

					

					<button className={`carousel-list-prev carousel-list-btn carousel-list-btn-${shape}`} onClick={handlePrev}>
						<Image alt="" src={'/assets/backward-arrow.png'} width={24} height={24} />
					</button>
					<button className={`carousel-list-next carousel-list-btn carousel-list-btn-${shape}`} onClick={handleNext}>
						<Image alt="" src={'/assets/next.png'} width={24} height={24} />
					</button>
				</div>
				<div className="carousel-dots">
						{Array.from({ length: totalPages }, (_, index) => (
							<span key={index} className={`dot ${currentIndex === index ? 'active' : ''}`}></span>
						))}
				</div>
				<Button hasShadow hasSpecialHover>
					<Link
						href="#sign_up_form"
						style={{ color: 'white', textDecoration: 'none' }}
						scroll={true}
					>
						Đăng ký tư vấn
					</Link>
				</Button>
			</div>
		</section>
	);
};
