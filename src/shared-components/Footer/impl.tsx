import React from 'react';
import './styles.sass';
import Image from 'next/image';

export const Footer = () => (
    <footer className='footer-wrapper'>
        <div id='footer-content' className='row'>
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
                    <div className='row'>
                        <div className='col large-4'>
                            <div className='col-inner'>
                                <h4>Sản phẩm - Dịch vụ</h4>
                                <div className='is-divider divider clearfix' style={{ marginTop: '10px', marginBottom: '10px' }}></div>
                                <p><a href=''></a>Tư vấn</p>
                                <p><a href=''></a>Đào tạo</p>
                                <p><a href=''></a>Phần mềm</p>
                            </div>
                        </div>
                        <div className='col large-4'>
                            <div className='col-inner'>
                                <h4>Kiến thức</h4>
                                <div className='is-divider divider clearfix' style={{ marginTop: '10px', marginBottom: '10px' }}></div>
                                <p><a href=''></a>Blog</p>
                                <p><a href=''></a>Tài liệu - Ebook</p>
                                <p><a href=''></a>Event</p>
                            </div>
                        </div>
                        <div className='col large-4'>
                            <div className='col-inner'>
                                <h4>Hỗ trợ</h4>
                                <div className='is-divider divider clearfix' style={{ marginTop: '10px', marginBottom: '10px' }}></div>
                                <p><a href=''></a>Trung tâm hỗ trợ</p>
                                <p><a href=''></a>Hình thức thanh toán</p>
                                <p><a href=''></a>Chính sách bảo mật</p>
                                <p><a href=''></a>Hướng dẫn sử dụng</p>
                                <p><a href=''></a>Liên hệ</p>
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