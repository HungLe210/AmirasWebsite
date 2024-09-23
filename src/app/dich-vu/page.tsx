import React from 'react'
import { Button } from '@shared-components';
import { Metadata } from 'next';
import './styles.sass'

export const metadata: Metadata = {
    title: 'Dịch vụ'
}
const page = () => {
    return (
        <section className='section'>
            <div className='service-header'>
                <div className='service-header-content'>
                    <h1>Dịch vụ</h1>
                    <p>Cung cấp giải pháp chương trình Loyalty toàn diện để hỗ trợ doanh nghiệp hoàn thành các mục tiêu về doanh thu, truyền thông và trải nghiệm khách hàng.</p>

                </div>
            </div>

            <section><div className='container'>A</div>
                <div className='container'>B</div>
                <div className='container'>C</div></section>
        </section>
    )
}

export default page