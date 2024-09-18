import { Button } from '@shared-components';
import Image from 'next/image';
import './styles.sass';

export default function HomePage() {
	return (
		<div className='section'>
			<div className='banner container'>
				<div className='banner-left'>
					<h2>Giải pháp toàn diện về</h2>
					<h1>Loyalty Marketing</h1>
					<h4>Tư vấn – Đào tạo – Nền tảng công nghệ</h4>
					<Button>
						Đăng ký tư vấn
					</Button>
				</div>
				<div className='banner-right'>
					<Image src='/assets/Banner-1-home-full.png' alt='' width={1118.33} height={594.31} />
				</div >
			</div>
			<div className='section'>
				<div className='bg-1'></div>
				<div className='bg-2'>
					<div className='solution-board container'>
						<h1>SMART LOYALTY</h1>
						<h3>Giải pháp toàn diện về Loyalty Marketing cho doanh nghiệp</h3>
						<div className='solution-list'>
							<div className='solution-card col-inner'>
								<Image src='/assets/Home/CRM_2.png' width={533} height={400} alt='' />
								<h3>Tư vấn</h3>
								<p>Về chiến lược, thiết kế chương trình, giám sát triển khai và đồng hành hỗ trợ doanh nghiệp.</p>
								<Button>Chi tiết</Button>
							</div>
							<div className='solution-card col-inner'>
								<Image src='/assets/Home/CRM_0.png' width={533} height={400} alt='' />
								<h3>Đào tạo</h3>
								<p>Đào tạo Loyalty Marketing với giáo trình Loyalty Quốc tế có bản quyền do Loyalty Academy (Mỹ) biên soạn.</p>
								<Button>Chi tiết</Button>
							</div>
							<div className='solution-card col-inner'>
								<Image src='/assets/Home/CRM_7.png' width={533} height={400} alt='' />
								<h3>Nền tảng công nghệ</h3>
								<p>Với hai lựa chọn: phiên bản điện toán đám mây (Cloud) hoặc cài đặt phần mềm tại máy chủ, tùy vào nhu cầu hoặc quy mô của doanh nghiệp.</p>
								<Button>Chi tiết</Button>
							</div>

						</div>

					</div>
				</div>

			</div>
			<div className='app section p1'>
				<div className='app-board container section'>
					<h1>NHIỀU LĨNH VỰC ỨNG DỤNG SMART LOYALTY</h1>
					<div className='app-list'>
						<div className='app-card col-inner'>
							<Image src='/assets/Home/Bank.png' width={90} height={90} alt='' />
							<p>Tài chính - Ngân hàng</p>
						</div>
						<div className='app-card col-inner'>
							<Image src='/assets/Home/Food.png' width={90} height={90} alt='' />
							<p>Dịch vụ ăn uống (FnB)</p>
						</div>
						<div className='app-card col-inner'>
							<Image src='/assets/Home/Shopping.png' width={90} height={90} alt='' />
							<p>Bán lẻ</p>
						</div>
						<div className='app-card col-inner'>
							<Image src='/assets/Home/Health.png' width={90} height={90} alt='' />
							<p>Sức khỏe - Làm đẹp</p>
						</div>
						<div className='app-card col-inner'>
							<Image src='/assets/Home/Hotel.png' width={90} height={90} alt='' />
							<p>Du lịch - Khách sạn</p>
						</div>
						<div className='app-card col-inner'>
							<Image src='/assets/Home/Coop.png' width={90} height={90} alt='' />
							<p>B2B</p>
						</div>
					</div>
					<Button>Đăng ký tư vấn</Button>
				</div>

			</div>

			<div className='p1'>
				<div className='fundamental container'>
					<div className='fundamental-title'>
						<h1>NỀN TẢNG SMART LOYALTY</h1>
						<h3>Dễ dàng thiết lập chương trình & đánh giá hiệu quả Loyalty Marketing</h3>
					</div>
					<div className='fundamental-content'>
						<div className="icon-box">
							<div className='icon-box-img'>
								<Image
									src='/assets/Home/CRM_2.png'
									fill
									alt=''
									style={{ objectFit: 'cover' }}
								/>
							</div>
							<div className='icon-box-details col'>
								<div className="col-inner">
									<h3>Quản trị chương trình Loyalty </h3>
									<p>Tùy chỉnh cơ chế tích điểm.</p>
									<p>Trả thưởng, cơ chế phân hạng để kết nối với hội viên theo cách của bạn.</p>
									<p>Thấu hiểu khách hàng thông qua những thông tin giao dịch, tương tác…</p>
									<p>Cập nhật theo thời gian thực.</p>
									<Button>Chi tiết</Button>
								</div>
							</div>
						</div>
						<div className="icon-box">

							<div className='icon-box-details col'>
								<div className="col-inner">
									<h3>Quản trị chương trình Loyalty </h3>
									<p>Trả thưởng, cơ chế phân hạng để kết nối với hội viên theo cách của bạn.</p>
									<p>Thấu hiểu khách hàng thông qua những thông tin giao dịch, tương tác…</p>
									<p>Cập nhật theo thời gian thực.</p>
									<Button>Chi tiết</Button>
								</div>
							</div>
							<div className='icon-box-img'>
								<Image
									src='/assets/Home/CRM_2.png'
									fill
									alt=''
									style={{ objectFit: 'cover' }}
								/>
							</div>
						</div>
						<div className="icon-box">
							<div className='icon-box-img'>
								<Image
									src='/assets/Home/CRM_2.png'
									fill
									alt=''
									style={{ objectFit: 'cover' }}
								/>
							</div>
							<div className='icon-box-details col'>
								<div className="col-inner">
									<h3>Quản trị chương trình Loyalty </h3>
									<p>Tùy chỉnh cơ chế tích điểm.</p>
									<p>Trả thưởng, cơ chế phân hạng để kết nối với hội viên theo cách của bạn.</p>
									<p>Thấu hiểu khách hàng thông qua những thông tin giao dịch, tương tác…</p>
									<Button>Chi tiết</Button>
								</div>
							</div>
						</div>
						<div className="icon-box">

							<div className='icon-box-details col'>
								<div className="col-inner">
									<h3>Quản trị chương trình Loyalty </h3>
									<p>Tùy chỉnh cơ chế tích điểm.</p>
									<p>Cập nhật theo thời gian thực.</p>
									<Button>Chi tiết</Button>
								</div>
							</div>
							<div className='icon-box-img'>
								<Image
									src='/assets/Home/CRM_2.png'
									fill
									alt=''
									style={{ objectFit: 'cover' }}
								/>
							</div>
						</div>
						<div className="icon-box">
							<div className='icon-box-img'>
								<Image
									src='/assets/Home/CRM_2.png'
									fill
									alt=''
									style={{ objectFit: 'cover' }}
								/>
							</div>
							<div className='icon-box-details col'>
								<div className="col-inner">
									<h3>Quản trị chương trình Loyalty </h3>
									<p>Tùy chỉnh cơ chế tích điểm.</p>
									<p>Trả thưởng, cơ chế phân hạng để kết nối với hội viên theo cách của bạn.</p>
									<p>Cập nhật theo thời gian thực.</p>
									<Button>Chi tiết</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div >

			<div className='reason p1'>
				<div className='reason-board container section'>
					<h1>TẠI SAO DOANH NGHIỆP LỰA CHỌN SMART LOYALTY?</h1>
					<div className='reason-list'>
						<div className='reason-card col-inner'>
							<Image src='/assets/Home/Bank.png' width={30} height={90} alt='' />
							<h3>GIẢI PHÁP TOÀN DIỆN</h3>
							<h4>Tư vấn – Đào tạo – Công cụ</h4>
							<p>Tài chính - Ngân hàng</p>
						</div>
						<div className='reason-card col-inner'>
							<Image src='/assets/Home/Bank.png' width={30} height={90} alt='' />
							<h3>GIẢI PHÁP TOÀN DIỆN</h3>
							<h4>Tư vấn – Đào tạo – Công cụ</h4>
							<p>Tài chính - Ngân hàng</p>
						</div>
						<div className='reason-card col-inner'>
							<Image src='/assets/Home/Bank.png' width={30} height={90} alt='' />
							<h3>GIẢI PHÁP TOÀN DIỆN</h3>
							<h4>Tư vấn – Đào tạo – Công cụ</h4>
							<p>Tài chính - Ngân hàng</p>
						</div>
						<div className='reason-card col-inner'>
							<Image src='/assets/Home/Bank.png' width={30} height={90} alt='' />
							<h3>GIẢI PHÁP TOÀN DIỆN</h3>
							<h4>Tư vấn – Đào tạo – Công cụ</h4>
							<p>Tài chính - Ngân hàng</p>
						</div>
						<div className='reason-card col-inner'>
							<Image src='/assets/Home/Bank.png' width={30} height={90} alt='' />
							<h3>GIẢI PHÁP TOÀN DIỆN</h3>
							<h4>Tư vấn – Đào tạo – Công cụ</h4>
							<p>Tài chính - Ngân hàng</p>
						</div>
						<div className='reason-card col-inner'>
							<Image src='/assets/Home/Bank.png' width={30} height={90} alt='' />
							<h3>GIẢI PHÁP TOÀN DIỆN</h3>
							<h4>Tư vấn – Đào tạo – Công cụ</h4>

							<p>Tài chính - Ngân hàng</p>
						</div>

					</div>
				</div>
			</div>
			<div className='customer p1'>
				<div className='reason-board container section'>
					<h1>TẠI SAO DOANH NGHIỆP LỰA CHỌN SMART LOYALTY?</h1>
					<div className='reason-list'>
						<div className='reason-card col-inner'>
							<Image src='/assets/Home/Bank.png' width={30} height={90} alt='' />
							<h3>GIẢI PHÁP TOÀN DIỆN</h3>
							<h4>Tư vấn – Đào tạo – Công cụ</h4>
							<p>Tài chính - Ngân hàng</p>
						</div>
						<div className='reason-card col-inner'>
							<Image src='/assets/Home/Bank.png' width={30} height={90} alt='' />
							<h3>GIẢI PHÁP TOÀN DIỆN</h3>
							<h4>Tư vấn – Đào tạo – Công cụ</h4>
							<p>Tài chính - Ngân hàng</p>
						</div>
						<div className='reason-card col-inner'>
							<Image src='/assets/Home/Bank.png' width={30} height={90} alt='' />
							<h3>GIẢI PHÁP TOÀN DIỆN</h3>
							<h4>Tư vấn – Đào tạo – Công cụ</h4>
							<p>Tài chính - Ngân hàng</p>
						</div>
						<div className='reason-card col-inner'>
							<Image src='/assets/Home/Bank.png' width={30} height={90} alt='' />
							<h3>GIẢI PHÁP TOÀN DIỆN</h3>
							<h4>Tư vấn – Đào tạo – Công cụ</h4>
							<p>Tài chính - Ngân hàng</p>
						</div>
						<div className='reason-card col-inner'>
							<Image src='/assets/Home/Bank.png' width={30} height={90} alt='' />
							<h3>GIẢI PHÁP TOÀN DIỆN</h3>
							<h4>Tư vấn – Đào tạo – Công cụ</h4>
							<p>Tài chính - Ngân hàng</p>
						</div>
						<div className='reason-card col-inner'>
							<Image src='/assets/Home/Bank.png' width={30} height={90} alt='' />
							<h3>GIẢI PHÁP TOÀN DIỆN</h3>
							<h4>Tư vấn – Đào tạo – Công cụ</h4>

							<p>Tài chính - Ngân hàng</p>
						</div>

					</div>
				</div>
			</div>
			<div className='event p1'>
				<div className='reason-board container section'>
					<h1>TẠI SAO DOANH NGHIỆP LỰA CHỌN SMART LOYALTY?</h1>
					<div className='reason-list'>
						<div className='reason-card col-inner'>
							<Image src='/assets/Home/Bank.png' width={30} height={90} alt='' />
							<h3>GIẢI PHÁP TOÀN DIỆN</h3>
							<h4>Tư vấn – Đào tạo – Công cụ</h4>
							<p>Tài chính - Ngân hàng</p>
						</div>
						<div className='reason-card col-inner'>
							<Image src='/assets/Home/Bank.png' width={30} height={90} alt='' />
							<h3>GIẢI PHÁP TOÀN DIỆN</h3>
							<h4>Tư vấn – Đào tạo – Công cụ</h4>
							<p>Tài chính - Ngân hàng</p>
						</div>
						<div className='reason-card col-inner'>
							<Image src='/assets/Home/Bank.png' width={30} height={90} alt='' />
							<h3>GIẢI PHÁP TOÀN DIỆN</h3>
							<h4>Tư vấn – Đào tạo – Công cụ</h4>
							<p>Tài chính - Ngân hàng</p>
						</div>
						<div className='reason-card col-inner'>
							<Image src='/assets/Home/Bank.png' width={30} height={90} alt='' />
							<h3>GIẢI PHÁP TOÀN DIỆN</h3>
							<h4>Tư vấn – Đào tạo – Công cụ</h4>
							<p>Tài chính - Ngân hàng</p>
						</div>
						<div className='reason-card col-inner'>
							<Image src='/assets/Home/Bank.png' width={30} height={90} alt='' />
							<h3>GIẢI PHÁP TOÀN DIỆN</h3>
							<h4>Tư vấn – Đào tạo – Công cụ</h4>
							<p>Tài chính - Ngân hàng</p>
						</div>
						<div className='reason-card col-inner'>
							<Image src='/assets/Home/Bank.png' width={30} height={90} alt='' />
							<h3>GIẢI PHÁP TOÀN DIỆN</h3>
							<h4>Tư vấn – Đào tạo – Công cụ</h4>

							<p>Tài chính - Ngân hàng</p>
						</div>

					</div>
				</div>
			</div>

		</div>
	);
}
