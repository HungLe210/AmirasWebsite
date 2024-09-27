import { Button } from '@shared-components';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import './styles.sass';
import { FaRegCheckCircle } from "react-icons/fa";

export function Fundamental() {
    return (
        <section className='fundamental'>
            <div className='fundamental-board'>
                <div className='fundamental-title'>
                    <h2>NỀN TẢNG SMART LOYALTY</h2>
                    <h4>Dễ dàng thiết lập chương trình & đánh giá hiệu quả Loyalty Marketing</h4>
                </div>
                <div className='fundamental-content'>
                    <div className="box">
                        <div className='box-img'>
                            <Image
                                src='/assets/Home/img/CRM_5.png'
                                fill
                                alt=''
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className='box-details col'>
                            <div className="col-inner">
                                <h3>Quản trị chương trình Loyalty </h3>
                                <p><FaRegCheckCircle className='icon' /> Tùy chỉnh cơ chế tích điểm.</p>
                                <p><FaRegCheckCircle className='icon' /> Trả thưởng, cơ chế phân hạng để kết nối với hội viên theo cách của bạn.</p>
                                <p><FaRegCheckCircle className='icon' /> Thấu hiểu khách hàng thông qua những thông tin giao dịch, tương tác…</p>
                                <p><FaRegCheckCircle className='icon' /> Cập nhật theo thời gian thực.</p>
                                <Link href='/san-pham'>
                                    <Button hasShadow hasSpecialHover>Chi tiết</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="box">

                        <div className='box-details col'>
                            <div className="col-inner">
                                <h3>Quản trị chiến dịch</h3>
                                <p><FaRegCheckCircle className='icon' /> Khởi tạo chiến dịch nhanh chóng chỉ với một vài thao tác đơn giản.</p>
                                <p><FaRegCheckCircle className='icon' /> Tùy chỉnh phân khúc hội viên dựa vào các tiêu chí tích hợp sẵn để tối ưu hóa ngân sách và hiệu quả chiến dịch.</p>
                                <Link href='/san-pham'><Button hasShadow hasSpecialHover>Chi tiết</Button></Link>
                            </div>
                        </div>
                        <div className='box-img'>
                            <Image
                                src='/assets/Home/img/CRM_1.png'
                                fill
                                alt=''
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className="box">
                        <div className='box-img'>
                            <Image
                                src='/assets/Home/img/CRM_4.png'
                                fill
                                alt=''
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className='box-details col'>
                            <div className="col-inner">
                                <h3>Tích điểm & Trả thưởng</h3>
                                <p><FaRegCheckCircle className='icon' />Thấu hiểu hội viên với cơ sở dữ liệu.</p>
                                <p><FaRegCheckCircle className='icon' />Thấu hiểu khách hàng thông qua những thông tin giao dịch, tương tác…</p>
                                <p><FaRegCheckCircle className='icon' />Dựa vào sự phong phú về hành vi, sở thích & các kịch bản tự động đưa ra bởi hệ thống để thiết kế phần thưởng “may đo” đến từng cá nhân.</p>
                                <p><FaRegCheckCircle className='icon' />Phần thưởng đa dạng với mạng lưới gần 3000 đối tác trả thưởng tại Việt Nam.</p>
                                <Link href='/san-pham'><Button hasShadow hasSpecialHover>Chi tiết</Button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="box">

                        <div className='box-details col'>
                            <div className="col-inner">
                                <h3>Báo cáo</h3>
                                <p><FaRegCheckCircle className='icon' />
                                    Tùy biến hoặc sử dụng bộ báo cáo tích hợp sẵn để đánh giá hiệu quả chương trình một cách dễ dàng.</p>
                                <p><FaRegCheckCircle className='icon' /> Đưa ra các dự đoán tự động dựa vào dữ liệu, insights khách hàng.</p>
                                <p><FaRegCheckCircle className='icon' />Hỗ trợ doanh nghiệp chủ động hoạch định kế hoạch kinh doanh.</p>
                                <Link href='/san-pham'><Button hasShadow hasSpecialHover>Chi tiết</Button></Link>
                            </div>
                        </div>
                        <div className='box-img'>
                            <Image
                                src='/assets/Home/img/CRM_x.png'
                                fill
                                alt=''
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className="box">
                        <div className='box-img'>
                            <Image
                                src='/assets/Home/img/CRM_y.png'
                                fill
                                alt=''
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className='box-details col'>
                            <div className="col-inner">
                                <h3>Tích hợp hệ thống</h3>
                                <p><FaRegCheckCircle className='icon' /> Dễ dàng tích hợp & đồng bộ hóa dữ liệu với các nền tảng POS, CRM, E-Commerce, quản lý doanh thu…</p>
                                <p><FaRegCheckCircle className='icon' /> Kết nối với nền tảng có sẵn của doanh nghiệp để tối ưu và cá nhân hóa trải nghiệm hội viên.</p>
                                <p><FaRegCheckCircle className='icon' /> Hệ thống Smart Loyalty có sự đồng bộ kết nối cao bắt kịp công nghệ số hóa doanh nghiệp</p>
                                <Link href='/san-pham'><Button hasShadow hasSpecialHover>Chi tiết</Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

