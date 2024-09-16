import { Button } from '@shared-components';
import Image from 'next/image';
import './styles.sass';

export default function HomePage() {
	return (
		<div className='container home-container'>
			<div className='banner'>
				<div style={{
					height: 1902
				}}>

				</div>
				<div className='banner-left'>
					<h2>Giải pháp toàn diện về</h2>
					<h1>Loyalty Marketing</h1>
					<h4>Tư vấn – Đào tạo – Nền tảng công nghệ</h4>
					<Button>
						<p>Đăng ký tư vấn</p>
					</Button>
				</div>
				<div className='banner-right'>
					<Image src='assets/Banner-1-home-19-8-5.png' alt='' />
				</div>
			</div>
		</div>
	);
}
