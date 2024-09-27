import './styles.sass';
import {
	HeaderBanner,
	Solution,
	Fundamental,
	NewEvent,
	Application,
	Reason,
} from './_components';
import { BlogCard, Carousel, CustomerCard } from '@shared-components';
import { CardProps } from '@shared-components/Card/BlogCard/types';
import { blogCards, customerCards } from '@constants/mockData';

export default function HomePage() {
	
	return (
		<section className="section">
			<HeaderBanner />
			<Solution />
			<Application />
			<Fundamental />
			<Reason />
			<Carousel
				uniqueID="customer"
				items={customerCards}
				ItemComponent={CustomerCard}
				shape="retangle"
				title="KHÁCH HÀNG CỦA CHÚNG TÔI"
				subtitle='Hàng trăm Doanh nghiệp tin dùng giải pháp Smart Loyalty'
				isButton={true}
			/>
			<NewEvent />
			<Carousel<CardProps>
				uniqueID="blog"
				items={blogCards}
				ItemComponent={BlogCard}
				shape="circle"
				title='BLOG HỮU ÍCH'
				isButton={false}
			/>
		</section>
	);
}
