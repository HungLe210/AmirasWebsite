import { Button } from '@shared-components'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import './styles.sass';

export function ChildEvent() {
    return (
        <section className='event'>
            <div className='reason-board container section'>
                <h2>TẠI SAO DOANH NGHIỆP LỰA CHỌN SMART LOYALTY?</h2>
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
        </section>
    )
}

