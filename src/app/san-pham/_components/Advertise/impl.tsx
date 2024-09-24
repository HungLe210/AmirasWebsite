import { Button } from '@shared-components'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import './styles.sass';
import { solutionData as mockData } from 'constants/mockData';
import { IoIosArrowDown } from 'react-icons/io';
export function Advertise() {
    //const [solutionData, setSolutionData] = useState(mockData);
    // const solutionData = mockData;
    return (
        <section className='advertise'>
            <div className='advertise-board'>
                <h2><strong>Smart Loyalty giúp bạn tìm ra giải pháp phù hợp!</strong></h2>
                <Button >Đăng ký tư vấn <IoIosArrowDown style={{ color: 'white' }} /></Button>
            </div>
        </section>
    );
};