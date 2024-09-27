import { Button } from '@shared-components'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import './styles.sass';
import { solutionData as mockData } from 'constants/mockData';
export function Foundation() {
    //const [solutionData, setSolutionData] = useState(mockData);
    // const solutionData = mockData;
    return (
        <section className='foundation'>
            <section className='foundation_0'>
                <div className='container'>
                    <h2><strong>Nền tảng Smart Loyalty</strong></h2>
                    <h3>Mang đến nhiều lợi ích cho doanh nghiệp</h3>
                </div>
            </section>
            <section className='foundation_1'>
                <div className="box">
                    <div className='box-img'>
                        <Image
                            src='/assets/Product/1.png'
                            fill
                            alt=''
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className='box-details'>

                        <h3>Trải nghiệm khách hàng liền mạch nhờ khả năng tích hợp mạnh mẽ.</h3>
                        <p>Nền tảng Smart Loyalty dễ dàng tích hợp & đồng bộ hóa dữ liệu với các nền tảng POS, CRM, E-commerce,… sẵn có của doanh nghiệp để tối ưu và cá nhân hóa trải nghiệm hội viên.</p>
                    </div>
                </div>
            </section>
            <section className='foundation_2'>

                <div className="box">

                    <div className='box-details'>

                        <h3>Dễ dàng quản lý các chương trình Loyalty</h3>
                        <p>Với nền tảng công nghệ Smart Loyalty, doanh nghiệp dễ dàng thiết lập và cài đặt các cơ chế thưởng để khuyến khích hội viên (khách hàng trung thành) tương tác, thực hiện hành vi mong muốn: chia sẻ về thương hiệu, mời bạn bè tham gia, dùng thử sản phẩm mới…; hoặc tặng thưởng dựa trên chính thói quen, phong cách sống của hội viên.</p>
                        <p>Hệ thống loyalty cũng cung cấp nguồn dữ liệu có giá trị cao để hỗ trợ doanh nghiệp giới thiệu, thiết kế và phát triển sản phẩm phù hợp.</p>

                    </div>
                    <div className='box-img'>
                        <Image
                            src='/assets/Product/2.png'
                            width={225}
                            height={225}
                            alt=''


                        />
                    </div>
                </div>
            </section>
            <section className='foundation_3'>

                <div className="box">
                    <div className='box-img'>
                        <Image
                            src='/assets/Product/3.png'
                            fill
                            alt=''
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className='box-details'>
                        <h3>Tối ưu hóa dữ liệu khách hàng</h3>
                        <p>Không những nhận được sự hỗ trợ từ các công cụ thống kê, báo cáo của <strong>Smart Loyalty</strong> để phục vụ cho quá trình phân tích & xử lý dữ liệu, doanh nghiệp còn xây dựng được cơ sở dữ liệu đồ sộ và chi tiết về nhân khẩu học, hành vi, sở thích, lối sống… của từng hội viên.</p>
                        <p>Những dữ liệu này hoàn toàn có khả năng trở thành chìa khóa giúp doanh nghiệp mở ra những cơ hội kinh doanh mới trong tương lai.</p>
                    </div>
                </div>
            </section>
        </section>
    );
};