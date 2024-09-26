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

export default function HomePage() {
	return (
		<section className="section">
			<HeaderBanner />

			<Solution />
			<Application />
			<Fundamental />
			<Reason />
			<Carousel uniqueID='customer'/>

			<NewEvent />

			<UsefulBlog />
		</section>
	);
}
