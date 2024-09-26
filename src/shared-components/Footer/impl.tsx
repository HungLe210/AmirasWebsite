import React from 'react';
import './styles.sass';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
    return (
        <footer >
            <div className='container'>
                <div className='footer-content'>
                    <div className='col large-3'>
                        <div className='col-inner'>
                            <Image src='/assets/logo-smartloyalty-02-amban.png' alt='' width={141} height={54.36} />
                            <p>Smart Loyalty là đơn vị đầu tiên tại Việt Nam có khả năng cung cấp giải pháp toàn diện về Loyalty Marketing, giúp doanh nghiệp tạo
                                sự gắn kết bền vững với với khách hàng.</p>
                            <Link href='tel:02466632844'><strong>Điện thoại</strong>:0246 632 844</Link>
                            <Link href='tel:0983399866'><strong>Hotline</strong>:0983 399 866</Link>
                            <Link href='mailto:info@smartloyalty.vn'><strong>Email</strong>:info@smartloyalty.vn</Link>

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
                                        <Link href='/dich-vu/tu-van-loyalty-marketing'>Tư vấn</Link>
                                        <Link href='/dich-vu/dao-tao-noi-bo-loyalty-marketing'>Đào tạo</Link>
                                        <Link href='/san-pham'>Phần mềm</Link>
                                    </div>
                                </div>
                                <div className='col large-4'>
                                    <div className='col-inner'>
                                        <h4>Kiến thức</h4>
                                        <div className='is-divider divider clearfix' style={{ marginTop: '10px', marginBottom: '10px' }}></div>
                                        <Link href='/blog'>Blog</Link>
                                        <Link href='/ebook-tai-lieu'>Tài liệu - Ebook</Link>
                                        <Link href='/su-kien'>Event</Link>
                                    </div>
                                </div>
                                <div className='col large-4'>
                                    <div className='col-inner'>
                                        <h4>Hỗ trợ</h4>
                                        <div className='is-divider divider clearfix' style={{ marginTop: '10px', marginBottom: '10px' }}></div>
                                        <Link href='/ho-tro'>Trung tâm hỗ trợ</Link>
                                        <Link href='/hinh-thuc-thanh-toan'>Hình thức thanh toán</Link>
                                        <Link href='/chinh-sach-bao-mat'>Chính sách bảo mật</Link>
                                        <Link href='/huong-dan-su-dung'>Hướng dẫn sử dụng</Link>
                                        <Link href='/lien-he'>Liên hệ</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div >

            <section className='section copyright'>
                <div className='container'>
                    Copyright 2024 © Smart Loyalty
                </div>
            </section>

        </footer >
    );
}

