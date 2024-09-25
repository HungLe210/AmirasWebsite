import React from 'react';
import './styles.sass';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => (
    <footer >
        <div className='container'>
            <div className='footer-content'>
                <div className='col large-3'>
                    <div className='col-inner'>
                        <Image src='/assets/logo-smartloyalty-02-amban.png' alt='' width={141} height={54.36} />
                        <p>Smart Loyalty là đơn vị đầu tiên tại Việt Nam có khả năng cung cấp giải pháp toàn diện về Loyalty Marketing, giúp doanh nghiệp tạo
                            sự gắn kết bền vững với với khách hàng.</p>
                        <p><strong>Điện thoại</strong>:0246 632 844</p>
                        <p><strong>Hotline</strong>:0983 399 866</p>
                        <p><strong>Email</strong>:info@smartloyalty.vn</p>
                        <p></p>
                    </div>
                </div>

                <div className='col large-3'>
                    <div className='col-inner'>
                        <h4>Thông tin</h4>
                        <div className='is-divider divider clearfix' style={{ marginTop: '10px', marginBottom: '10px' }}></div>
                        <p>CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN CÔNG NGHỆ SMART LOYALTY QUỐC TẾ </p>
                        <p>MST: 0108606357 - Sở KH&ĐT Hà Nội cấp ngày 29/01/2019. </p>
                        <p>Trụ sở chính: Tầng 6, Tòa nhà Việt Á, số 9 Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội.</p>
                    </div>
                </div>

                <div className='col large-6'>

                    <div className='col-inner'>
                        <div className='footer-sub'>
                            <div className='col large-4'>
                                <div className='col-inner'>
                                    <h4>Sản phẩm - Dịch vụ</h4>
                                    <div className='is-divider divider clearfix' style={{ marginTop: '10px', marginBottom: '10px' }}></div>
                                    <p><Link href='/dich-vu/tu-van-loyalty-marketing'></Link>Tư vấn</p>
                                    <p><Link href='/dich-vu/dao-tao-noi-bo-loyalty-marketing'></Link>Đào tạo</p>
                                    <p><Link href='/san-pham'></Link>Phần mềm</p>
                                </div>
                            </div>
                            <div className='col large-4'>
                                <div className='col-inner'>
                                    <h4>Kiến thức</h4>
                                    <div className='is-divider divider clearfix' style={{ marginTop: '10px', marginBottom: '10px' }}></div>
                                    <p><Link href='/blog'></Link>Blog</p>
                                    <p><Link href='/ebook-tai-lieu'></Link>Tài liệu - Ebook</p>
                                    <p><Link href='/su-kien'></Link>Event</p>
                                </div>
                            </div>
                            <div className='col large-4'>
                                <div className='col-inner'>
                                    <h4>Hỗ trợ</h4>
                                    <div className='is-divider divider clearfix' style={{ marginTop: '10px', marginBottom: '10px' }}></div>
                                    <p><Link href='/ho-tro'></Link>Trung tâm hỗ trợ</p>
                                    <p><Link href='/hinh-thuc-thanh-toan'></Link>Hình thức thanh toán</p>
                                    <p><Link href='/chinh-sach-bao-mat'></Link>Chính sách bảo mật</p>
                                    <p><Link href='/huong-dan-su-dung'></Link>Hướng dẫn sử dụng</p>
                                    <p><Link href='/lien-he'></Link>Liên hệ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        <section className='section copyright'>
            <div className='container'>
                Copyright 2024 © Smart Loyalty
            </div>
        </section>

    </footer >
);