import { Button } from '@shared-components'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import './styles.sass';
import { solutionData as mockData } from 'constants/mockData';
import { FaGraduationCap, FaChalkboardTeacher, FaUserTie, FaWindowRestore, FaUserShield } from "react-icons/fa";
import { FaListCheck } from 'react-icons/fa6';
export const Reason = () => {
    //const [solutionData, setSolutionData] = useState(mockData);
    const solutionData = mockData;
    return (
        <section className='reason'>
            <div className='reason-board'>
                <h2>TẠI SAO DOANH NGHIỆP LỰA CHỌN SMART LOYALTY?</h2>
                <div className='reason-list'>
                    <div className='reason-card'>
                        <FaListCheck className='reason-card-icon' />
                        <h3>GIẢI PHÁP TOÀN DIỆN</h3>
                        <h4>Tư vấn – Đào tạo – Công cụ</h4>
                        <p>Nền tảng đáp ứng đầy đủ nhu cầu triển khai Loyalty Marketing cho doanh nghiệp và phù hợp với doanh nghiệp Việt.</p>
                    </div>
                    <div className='reason-card'>
                        <FaChalkboardTeacher className='reason-card-icon' />
                        <h3>NỀN TẢNG CÔNG NGHỆ</h3>
                        <h4>Chuyên sâu, dễ sử dụng</h4>
                        <p>Giúp doanh nghiệp đạt hiệu quả cao nhất khi hoạch định và triển khai Loyalty Marketing.</p>
                    </div>
                    <div className='reason-card'>
                        <FaGraduationCap className='reason-card-icon' />
                        <h3>CHƯƠNG TRÌNH ĐÀO TẠO</h3>
                        <h4>Bản quyền Loyalty Academy (Mỹ)</h4>
                        <p>Smart Loyalty là đơn vị duy nhất tại Việt Nam cung cấp dịch vụ đào tạo về Loyalty Marketing theo bản quyền...</p>
                    </div>
                    <div className='reason-card'>
                        <FaUserTie className='reason-card-icon' />
                        <h3>ĐỘI NGŨ CHUYÊN GIA</h3>
                        <h4>Giàu kinh nghiệm</h4>
                        <p>Đội ngũ chuyên gia đạt chứng chỉ Quốc tế về Loyalty Marketing với hàng chục năm kinh nghiệm thực tiễn triển khai cho các...</p>
                    </div>
                    <div className='reason-card'>
                        <FaWindowRestore className='reason-card-icon' />
                        <h3>DỊCH VỤ HỖ TRỢ</h3>
                        <h4>Tận tình, chuyên nghiệp</h4>
                        <p>Smart Loyalty sẵn sàng đồng hành, giúp doanh nghiệp đạt các mục tiêu kỳ vọng qua hoạt động...</p>
                    </div>
                    <div className='reason-card'>
                        <FaUserShield className='reason-card-icon' />
                        <h3>THƯƠNG HIỆU</h3>
                        <h4>Được nhiều doanh nghiệp lựa chọn</h4>

                        <p>Smart Loyalty là đơn vị được các thương hiệu lớn tin tưởng lựa chọn giải pháp trong gần 10 năm</p>
                    </div>

                </div>
            </div>
        </section>
    );
};