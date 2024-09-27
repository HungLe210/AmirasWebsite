'use client';
import Link from 'next/link';
import './styles.sass';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '@shared-components';
import { CarouselProps } from './types';

export const Carousel = <T,>({ ItemComponent, items, shape, uniqueID, title, subtitle,isButton }: CarouselProps<T>) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const totalPages = 3;

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
	};

	useEffect(() => {
		let group = document.querySelector<HTMLDivElement>(`#carousel-list-wrapper-${uniqueID}`);
		
		if (group) {
			group.style.transform = `translateX(-${currentIndex * group.offsetWidth}px)`; // Adjust based on the current index
			
		}
	}, [currentIndex]);

	return (
		<section className="customer">
			<h2>{title}</h2>
			<h3>{subtitle}</h3>
			<div className="carousel">
				<div className="carousel-list">
					<div className={`carousel-list-wrapper`} id={`carousel-list-wrapper-${uniqueID}`}>
						{Array.from({ length: 3 }, (item, index1) => {
							return (
								<div className="carousel-group" key={index1}>
									{items.map((card, index) => {
										return <ItemComponent key={index} item={card}></ItemComponent>;
									})}
								</div>
							);
						})}
					</div>

					<button
						className={`carousel-list-prev carousel-list-btn carousel-list-btn-${shape}`}
						onClick={handlePrev}
					>
						<Image alt="" src={'/assets/backward-arrow.png'} width={24} height={24} />
					</button>
					<button
						className={`carousel-list-next carousel-list-btn carousel-list-btn-${shape}`}
						onClick={handleNext}
					>
						<Image alt="" src={'/assets/next.png'} width={24} height={24} />
					</button>
				</div>
				<div className="carousel-dots">
					{Array.from({ length: totalPages }, (_, index) => (
						<span key={index} className={`dot ${currentIndex === index ? 'active' : ''}`}></span>
					))}
				</div>

				
				{
					isButton? <Button hasShadow hasSpecialHover>
					<Link
						href="#sign_up_form"
						style={{ color: 'white', textDecoration: 'none' }}
						scroll={true}
					>
						Đăng ký tư vấn
					</Link>
					</Button>:null
				}
				
			</div>
		</section>
	);
};
