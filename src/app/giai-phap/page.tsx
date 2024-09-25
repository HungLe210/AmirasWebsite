import React from 'react'
import './styles.sass';
import { Button } from '@shared-components';
import { Metadata } from 'next';
import Image from 'next/image'
import Link from 'next/link';
import { Carousel } from '@shared-components/Carousel';

export const metadata: Metadata = {
    title: 'Giải pháp'
}
const page = () => {
    return (
        <section className='product'>

            <section className='product-header'>
                <div className='product-header-content'>
                    <div className='product-header-item'>
                        <Button hasShadow>Đăng ký tư vấn</Button>
                        <Button hasShadow isYellow>Demo phần mềm</Button>
                    </div>

                </div>
            </section>

            <section className='difficult'>
                <div className='difficult-board'>
                    <h2>
                        Doanh nghiệp đang đối mặt với những khó khăn…
                    </h2>
                    <div className='difficult-list'>
                        <div className='difficult-card'>
                            <Image src='/assets/Home/CRM_7.png' width={533} height={400} alt='' />
                            <h3>Không nhận diện được khách hàng trung thành</h3>
                            <div className='is-divider'></div>
                            <p>Không có hệ thống ghi dữ liệu về khách hàng hoặc có hệ thống nhưng dữ liệu không đầy đủ dẫn đến khó phân tích, đánh giá và nắm bắt hành vi, sở thích, thói quen của khách hàng cũng như nhận diện nhóm khách hàng trung thành để có kế hoạch chăm sóc, bán hàng phù hợp. .</p>

                        </div>
                        <div className='difficult-card'>
                            <Image src='/assets/Home/CRM_0.png' width={533} height={400} alt='' />
                            <h3>Khó đo lường hiệu quả chương trình khách hàng trung thành</h3>
                            <div className='is-divider'></div>
                            <p>Thiếu công cụ thông minh để thiết lập, theo dõi và đo lường hiệu quả các chương trình cho khách hàng trung thành dẫn đến tình trạng lãng phí (tài chính, nhân sự…) để vận hành các chương trình mà không mang lại kết quả mong muốn (về doanh thu, thị phần,…)</p>

                        </div>
                        <div className='difficult-card'>
                            <Image src='/assets/Home/CRM_7.png' width={533} height={400} alt='' />
                            <h3>Chưa biết tối ưu giá trị trên mỗi khách hàng</h3>
                            <div className='is-divider'></div>
                            <p>Doanh nghiệp có thể sở hữu dữ liệu lớn về khách hàng nhưng chưa có một cơ sở dữ liệu tập trung giúp dễ dàng phân tích, đánh giá để thấu hiểu khách hàng và dự đoán các hành vi, xu hướng trong tương lai, từ đó tối ưu giá trị trên mỗi khách hàng mà doanh nghiệp đang có.</p>

                        </div>
                    </div>
                </div>

            </section>

            <section className='advertise'>
                <div className='advertise-board'>
                    <h2><strong>Smart Loyalty giúp bạn tìm ra giải pháp phù hợp!</strong></h2>
                    <Button >Đăng ký tư vấn</Button>
                </div>
            </section>

            <section className='base'>
                <section className='base_0'>
                    <div className='container'>
                        <h2><strong>Nền tảng Smart Loyalty</strong></h2>
                        <h3>Mang đến nhiều lợi ích cho doanh nghiệp</h3>
                    </div>
                </section>
                <section className='base_1'>
                    <div className="box">
                        <div className='box-img'>
                            <Image
                                src='/assets/Home/CRM_2.png'
                                fill
                                alt=''
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className='box-details col'>
                            <div className="col-inner">
                                <h3>Trải nghiệm khách hàng liền mạch nhờ khả năng tích hợp mạnh mẽ.</h3>
                                <p>Nền tảng Smart Loyalty dễ dàng tích hợp & đồng bộ hóa dữ liệu với các nền tảng POS, CRM, E-commerce,… sẵn có của doanh nghiệp để tối ưu và cá nhân hóa trải nghiệm hội viên.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='base_2'>

                    <div className="box">

                        <div className='box-details col'>
                            <div className="col-inner">
                                <h3>Dễ dàng quản lý các chương trình Loyalty</h3>
                                <p>Với nền tảng công nghệ Smart Loyalty, doanh nghiệp dễ dàng thiết lập và cài đặt các cơ chế thưởng để khuyến khích hội viên (khách hàng trung thành) tương tác, thực hiện hành vi mong muốn: chia sẻ về thương hiệu, mời bạn bè tham gia, dùng thử sản phẩm mới…; hoặc tặng thưởng dựa trên chính thói quen, phong cách sống của hội viên.</p>
                                <p>Hệ thống loyalty cũng cung cấp nguồn dữ liệu có giá trị cao để hỗ trợ doanh nghiệp giới thiệu, thiết kế và phát triển sản phẩm phù hợp.</p>
                            </div>
                        </div>
                        <div className='box-img'>
                            <Image
                                src='/assets/Home/CRM_2.png'
                                fill
                                alt=''
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </section>
                <section className='base_3'>

                    <div className="box">
                        <div className='box-img'>
                            <Image
                                src='/assets/Home/CRM_2.png'
                                fill
                                alt=''
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className='box-details col'>
                            <div className="col-inner">
                                <h3>Tối ưu hóa dữ liệu khách hàng</h3>
                                <p>Không những nhận được sự hỗ trợ từ các công cụ thống kê, báo cáo của <strong>Smart Loyalty</strong> để phục vụ cho quá trình phân tích & xử lý dữ liệu, doanh nghiệp còn xây dựng được cơ sở dữ liệu đồ sộ và chi tiết về nhân khẩu học, hành vi, sở thích, lối sống… của từng hội viên.</p>
                                <p>Những dữ liệu này hoàn toàn có khả năng trở thành chìa khóa giúp doanh nghiệp mở ra những cơ hội kinh doanh mới trong tương lai.</p>
                                <Button hasShadow hasSpecialHover>Chi tiết</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section className='difference'>
                <div className='diffrence-board'>
                    <h2>
                        <strong>Phần mềm Smart Loyalty</strong>
                    </h2>
                    <h3>Khác biệt và ưu việt</h3>
                    <div className='difference-board-content'>
                        <div className='reason-card'>
                            <Image src='/assets/Home/Bank.png' width={30} height={90} alt='' />
                            <h3>GIẢI PHÁP TOÀN DIỆN</h3>
                            <h4>Tư vấn – Đào tạo – Công cụ</h4>
                            <p>Tài chính - Ngân hàng</p>
                        </div>
                        <div className='reason-card'>
                            <Image src='/assets/Home/Bank.png' width={30} height={90} alt='' />
                            <h3>GIẢI PHÁP TOÀN DIỆN</h3>
                            <h4>Tư vấn – Đào tạo – Công cụ</h4>
                            <p>Tài chính - Ngân hàng</p>
                        </div>
                        <div className='reason-card'>
                            <Image src='/assets/Home/Bank.png' width={30} height={90} alt='' />
                            <h3>GIẢI PHÁP TOÀN DIỆN</h3>
                            <h4>Tư vấn – Đào tạo – Công cụ</h4>
                            <p>Tài chính - Ngân hàng</p>
                        </div>
                    </div>
                </div>
            </section>

            <Carousel />

            <section className='newspaper'>
                <Link href='/blog' style={{ textDecoration: 'none' }}><h2>
                    <strong>
                        Báo chí nói về Smart Loyalty
                    </strong>
                </h2></Link>
            </section>


        </section>
    )
}

export default page