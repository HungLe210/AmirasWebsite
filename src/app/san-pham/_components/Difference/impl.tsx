import { Button } from '@shared-components'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import './styles.sass';
import { solutionData as mockData } from 'constants/mockData';
export function Difference() {
    //const [solutionData, setSolutionData] = useState(mockData);
    // const solutionData = mockData;
    return (
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

                    <Image src='/assets/Home/Bank.png' width={100} height={500} alt='' />

                    <div className='reason-card'>
                        <Image src='/assets/Home/Bank.png' width={30} height={90} alt='' />
                        <h3>GIẢI PHÁP TOÀN DIỆN</h3>
                        <h4>Tư vấn – Đào tạo – Công cụ</h4>
                        <p>Tài chính - Ngân hàng</p>
                    </div>
                </div>
            </div>
        </section>
    );
};