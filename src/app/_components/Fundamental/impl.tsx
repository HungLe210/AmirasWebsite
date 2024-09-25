import { Button } from '@shared-components'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import './styles.sass';
import { FaRegCheckCircle } from "react-icons/fa";

export function Fundamental() {
    return (
        <section className='fundamental'>
            <div className='fundamental-board'>
                <div className='fundamental-title'>
                    <h2>NỀN TẢNG SMART LOYALTY</h2>
                    <h3>Dễ dàng thiết lập chương trình & đánh giá hiệu quả Loyalty Marketing</h3>
                </div>
                <div className='fundamental-content'>
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
                                <h3>Quản trị chương trình Loyalty </h3>
                                <p><FaRegCheckCircle className='icon' /> Trả thưởng, cơ chế phân hạng để kết nối với hội viên theo cách của bạn.</p>
                                <p><FaRegCheckCircle className='icon' /> Thấu hiểu khách hàng thông qua những thông tin giao dịch, tương tác…</p>
                                <p><FaRegCheckCircle className='icon' /> Cập nhật theo thời gian thực.</p>
                                <Link href='/san-pham'><Button hasShadow hasSpecialHover>Chi tiết</Button></Link>
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
                                <h3>Quản trị chương trình Loyalty </h3>
                                <p><FaRegCheckCircle className='icon' />Tùy chỉnh cơ chế tích điểm.</p>
                                <p><FaRegCheckCircle className='icon' />Trả thưởng, cơ chế phân hạng để kết nối với hội viên theo cách của bạn.</p>
                                <p><FaRegCheckCircle className='icon' />Thấu hiểu khách hàng thông qua những thông tin giao dịch, tương tác…</p>
                                <Link href='/san-pham'><Button hasShadow hasSpecialHover>Chi tiết</Button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="box">

                        <div className='box-details col'>
                            <div className="col-inner">
                                <h3>Quản trị chương trình Loyalty </h3>
                                <p><FaRegCheckCircle className='icon' /> Tùy chỉnh cơ chế tích điểm.</p>
                                <p><FaRegCheckCircle className='icon' /> Cập nhật theo thời gian thực.</p>
                                <Link href='/san-pham'><Button hasShadow hasSpecialHover>Chi tiết</Button></Link>
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
                                <h3>Quản trị chương trình Loyalty </h3>
                                <p><FaRegCheckCircle className='icon' /> Tùy chỉnh cơ chế tích điểm.</p>
                                <p><FaRegCheckCircle className='icon' /> Trả thưởng, cơ chế phân hạng để kết nối với hội viên theo cách của bạn.</p>
                                <p><FaRegCheckCircle className='icon' /> Cập nhật theo thời gian thực.</p>
                                <Link href='/san-pham'><Button hasShadow hasSpecialHover>Chi tiết</Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

