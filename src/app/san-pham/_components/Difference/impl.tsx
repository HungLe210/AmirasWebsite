'use client'
import { Button } from '@shared-components'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import './styles.sass';
import { useInView } from '@hooks/useInView';


// constants/mockData.ts
const mockData = [
    [
        {
            icon: '/assets/Product/cloud-computing.png', // Đường dẫn đến hình ảnh biểu tượng
            title: 'Linh hoạt', // Tiêu đề
            description: 'Hệ thống được thiết kế theo tiêu chuẩn quốc tế và có thể đáp ứng chương trình loyalty cho nhiều lĩnh vực khác nhau. Dễ dàng tích hợp vào nhiều phần mềm khác', // Mô tả chi tiết
        },
        {
            icon: '/assets/Product/cloud-computing.png',
            title: 'Tiện ích',
            description: 'Nền tảng dễ sử dụng giúp người dùng nhanh chóng tiếp cận và sử dụng các tính năng mà không cần kiến thức chuyên sâu.',
        },
        {
            icon: '/assets/Product/cloud-computing.png',
            title: 'Bảo mật',
            description: 'Hệ thống đảm bảo an toàn dữ liệu với các tiêu chuẩn bảo mật cao nhất trong ngành.',
        }
    ],
    [
        {
            icon: '/assets/Product/cloud-computing.png',
            title: 'Tích hợp',
            description: 'Dễ dàng kết nối và tích hợp với các hệ thống hiện có mà không làm gián đoạn quy trình làm việc.',
        },
        {
            icon: '/assets/Product/cloud-computing.png',
            title: 'Hỗ trợ',
            description: 'Đội ngũ hỗ trợ khách hàng tận tâm, sẵn sàng giúp đỡ 24/7 để đảm bảo trải nghiệm tốt nhất cho người dùng.',
        },
        {
            icon: '/assets/Product/cloud-computing.png',
            title: 'Tối ưu hóa',
            description: 'Giải pháp tối ưu hóa chi phí và thời gian cho doanh nghiệp trong việc quản lý khách hàng và chương trình loyalty.',
        }
    ],
];


export function Difference() {
    const { ref, isInView } = useInView();

    return (
        <section className='difference'>
            <div className='difference-board'>
                <h2>
                    <strong>Phần mềm Smart Loyalty</strong>
                </h2>
                <h3>Khác biệt và ưu việt</h3>
                <div className='difference-board-content'>
                    <div className='difference-list'>
                        {mockData[0].map((item, index) => (
                            <div ref={ref}
                                className={`difference-box ${isInView ? 'fade-in' : ''}`}
                                key={index}
                            >
                                <div className='difference-box-header'>
                                    <Image src={item.icon} width={42} height={42} alt={item.title} />
                                    <h3>{item.title}</h3>
                                </div>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className='difference-list'>
                        <Image src='/assets/Product/Prod.png' width={500} height={600} alt='Sản phẩm' />
                    </div>
                    <div className='difference-list'>
                        {mockData[0].map((item, index) => (
                            <div
                                className={`difference-box ${isInView ? 'fade-in' : ''}`}
                                key={index}
                            >
                                <div className='difference-box-header'>
                                    <Image src={item.icon} width={42} height={42} alt={item.title} />
                                    <h3>{item.title}</h3>
                                </div>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
