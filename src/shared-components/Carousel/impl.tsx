'use client';
import Link from 'next/link';
import './styles.sass';
import Image from 'next/image';
import { useEffect } from 'react';
import CustomerCard from '@shared-components/Card/CustomerCard/impl';
import { Button } from '@shared-components';

export const Carousel = () => {
	let cardButton = 'đọc thêm';
	let cardDes =
		'Cung cấp sản phẩm cho vay tiêu dùng đa dạng như xe máy, ô tô, xe tải nhẹ, xe điện,hàng điện máy, điện thoại,...';
	let cardImage = '/assets/Home/hd-sai-gon-jpg.webp';
	let cardTitle = 'HD SAIGON';

	useEffect(() => {
		let slider = document.querySelector<HTMLDivElement>('.slider .card-list');
		let items = document.querySelectorAll<HTMLDivElement>('.slider .card-list .card-item');
		let next = document.getElementById('next');
		let prev = document.getElementById('prev');
		let dots = document.querySelectorAll('.slider .dots li');

		let lengthItems = items.length - 1;
		let active = 0;
		next!.onclick = function () {
			active = active + 1 <= lengthItems ? active + 1 : 0;
			reloadSlider();
		};
		prev!.onclick = function () {
			active = active - 1 >= 0 ? active - 1 : lengthItems;
			reloadSlider();
		};

		let refreshInterval = setInterval(() => {
			// next!.click();
		}, 3000);
		let itemsPerSlide = 4;

		function reloadSlider() {

			slider!.style.left = -items[active].offsetLeft + 'px';
			//
			let last_active_dot = document.querySelector('.slider .dots li.active');
			console.log(last_active_dot);
			last_active_dot!.classList.remove('active');
			dots[active].classList.add('active');

			clearInterval(refreshInterval);
			refreshInterval = setInterval(() => {
				// next!.click();
			}, 3000);
		}

		dots.forEach((li, key) => {
			li.addEventListener('click', () => {
				active = key;
				reloadSlider();
			});
		});

		return () => clearInterval(refreshInterval);
	}, []);

	return (
		<section className="customer">
			<div className="customer-board card-wrapper">
				<h2>KHÁCH HÀNG CỦA CHÚNG TÔI</h2>
				<h3>Hàng trăm Doanh nghiệp tin dùng giải pháp Smart Loyalty</h3>
				<div className="slider">
					<ul className="card-list">
						{Array.from({ length: 8 }, (v, i) => (
							<li key={i} className="card-item">
								<CustomerCard
									cardButton={cardButton}
									cardDescription={cardDes}
									cardImage={cardImage}
									cardTitle={cardTitle}
								></CustomerCard>
							</li>
						))}
					</ul>

					<div className="buttons">
						<button id="prev">
							<img src={'/assets/backward-arrow.png'} alt="" />
						</button>
						<button id="next">
							<img src={'/assets/next.png'} alt="" />
						</button>
					</div>
					<ul className="dots">
						<li className="active"></li>
						{Array.from({ length: 7 }, (v, i) => (
							<li key={i}></li>
						))}
					</ul>
				</div>
				<Button hasShadow hasSpecialHover>
					<Link href='#sign_up_form' style={{ color: 'white', textDecoration: 'none' }} scroll={true}>Đăng ký tư vấn</Link>
				</Button>
			</div>
		</section>
	);
};
