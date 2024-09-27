import './styles.sass';

import {
	HeaderBanner,
	Solution,
	Fundamental,
	NewEvent,
	Application,
	Reason,
} from './_components';
import { CustomerCardType } from '@shared-components/Card/CustomerCard/types';

import { BlogCard, Carousel, CustomerCard } from '@shared-components';
import { CardProps } from '@shared-components/Card/BlogCard/types';


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

const blogCards: CardProps[] = [
	{
		img: '/assets/Blog/Blog_2.png',
		category: 'Thể loại 1',
		content: 'Tiêu đề chính',
		title: 'Đây là một đoạn mô tả ngắn gọn về nội dung của card này.'
	},
	{
		img: '/assets/Blog/Blog_2.png',
		category: 'Thể loại 1',
		content: 'Tiêu đề chính',
		title: 'Đây là một đoạn mô tả ngắn gọn về nội dung của card này.'
	},
	{
		img: '/assets/Blog/Blog_2.png',
		category: 'Thể loại 1',
		content: 'Tiêu đề chính',
		title: 'Đây là một đoạn mô tả ngắn gọn về nội dung của card này.'
	},
	// {
	// 	img: '/assets/Blog/Blog_2.png',
	// 	category:'Thể loại 1',
	// 	content:'Tiêu đề chính',
	// 	title:'Đây là một đoạn mô tả ngắn gọn về nội dung của card này.'
	// }
]

export default function HomePage() {
	return (
		<section className='section'>
			<HeaderBanner />
			<Solution />
			<Application />
			<Fundamental />
			<Reason />
			<Carousel uniqueID='customer' items={customerCards} ItemComponent={CustomerCard} shape='retangle' isButton={false} />
			<NewEvent />
			<Carousel<CardProps> uniqueID='blog' items={blogCards} ItemComponent={BlogCard} shape='circle' isButton={false} />
		</section>
	);
}
