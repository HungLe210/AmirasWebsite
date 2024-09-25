import { Button } from '@shared-components'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import './styles.sass';

export function Application() {
    return (
        <section className='app'>
            <div className='app-board'>
                <h2>NHIỀU LĨNH VỰC ỨNG DỤNG SMART LOYALTY</h2>
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
                <Link href='#sign_up_form'><Button hasShadow hasSpecialHover>Đăng ký tư vấn</Button></Link>
            </div>

        </section>
    )
}

