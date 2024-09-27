import { Button } from '@shared-components';
import React from 'react';
import './styles.sass';
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