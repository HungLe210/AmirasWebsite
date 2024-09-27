import { Button } from '@shared-components';
import Image from 'next/image';
import './styles.sass';
import { Carousel } from '@shared-components/Carousel';
import Link from 'next/link';
import {
	HeaderBanner,
	Solution,
	Fundamental,
	UsefulBlog,
	NewEvent,
	Application,
	Reason,
} from './_components';
import { FaListCheck } from 'react-icons/fa6';
import { CustomerCardType } from '@shared-components/Card/CustomerCard/types';
import CustomerCard from '@shared-components/Card/CustomerCard/impl';
import { CardProps } from '@shared-components/Card/BlogCard/types';
import { BlogCard } from '@shared-components/Card';

export default function HomePage() {
	let cardButton = 'đọc thêm';
	let cardDescription =
		'Cung cấp sản phẩm cho vay tiêu dùng đa dạng như xe máy, ô tô, xe tải nhẹ, xe điện,hàng điện máy, điện thoại,...';
	let cardImage = '/assets/Home/hd-sai-gon-jpg.webp';
	let cardTitle = 'HD SAIGON';

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

	const blogCards: CardProps[]= [
		{
			img: "/assets/Blog/Blog_2.png",
			category:"Thể loại 1",
			content:"Tiêu đề chính",
			title:"Đây là một đoạn mô tả ngắn gọn về nội dung của card này."
		},
		{
			img: "/assets/Blog/Blog_2.png",
			category:"Thể loại 1",
			content:"Tiêu đề chính",
			title:"Đây là một đoạn mô tả ngắn gọn về nội dung của card này."
		},
		{
			img: "/assets/Blog/Blog_2.png",
			category:"Thể loại 1",
			content:"Tiêu đề chính",
			title:"Đây là một đoạn mô tả ngắn gọn về nội dung của card này."
		},
		// {
		// 	img: "/assets/Blog/Blog_2.png",
		// 	category:"Thể loại 1",
		// 	content:"Tiêu đề chính",
		// 	title:"Đây là một đoạn mô tả ngắn gọn về nội dung của card này."
		// }
	]
	return (
		<section className="section">
			<HeaderBanner />

			<Solution />
			<Application />
			<Fundamental />
			<Reason />
			<Carousel uniqueID='customer' items={customerCards} ItemComponent={CustomerCard} shape='retangle'/>
			<NewEvent />
			<Carousel<CardProps> uniqueID='blog' items={blogCards} ItemComponent={BlogCard} shape='circle'/>
		</section>
	);
}
