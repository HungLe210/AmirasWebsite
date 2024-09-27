'use client';
import React, { useEffect, useRef, useState } from 'react';
import { FaGraduationCap, FaChalkboardTeacher, FaUserTie, FaWindowRestore, FaUserShield } from 'react-icons/fa';
import { FaListCheck } from 'react-icons/fa6';
import './styles.sass';

const data = [
    {
        icon: <FaListCheck className='reason-card-icon' />,
        title: 'GIẢI PHÁP TOÀN DIỆN',
        subtitle: 'Tư vấn – Đào tạo – Công cụ',
        text: 'Nền tảng đáp ứng đầy đủ nhu cầu triển khai Loyalty Marketing cho doanh nghiệp và phù hợp với doanh nghiệp Việt.',
    },
    {
        icon: <FaChalkboardTeacher className='reason-card-icon' />,
        title: 'NỀN TẢNG CÔNG NGHỆ',
        subtitle: 'Chuyên sâu, dễ sử dụng',
        text: 'Giúp doanh nghiệp đạt hiệu quả cao nhất khi hoạch định và triển khai Loyalty Marketing.',
    },
    {
        icon: <FaGraduationCap className='reason-card-icon' />,
        title: 'CHƯƠNG TRÌNH ĐÀO TẠO',
        subtitle: 'Bản quyền Loyalty Academy (Mỹ)',
        text: 'Smart Loyalty là đơn vị duy nhất tại Việt Nam cung cấp dịch vụ đào tạo về Loyalty Marketing theo bản quyền...',
    },
    {
        icon: <FaUserTie className='reason-card-icon' />,
        title: 'ĐỘI NGŨ CHUYÊN GIA',
        subtitle: 'Giàu kinh nghiệm',
        text: 'Đội ngũ chuyên gia đạt chứng chỉ Quốc tế về Loyalty Marketing với hàng chục năm kinh nghiệm thực tiễn triển khai cho các...',
    },
    {
        icon: <FaWindowRestore className='reason-card-icon' />,
        title: 'DỊCH VỤ HỖ TRỢ',
        subtitle: 'Tận tình, chuyên nghiệp',
        text: 'Smart Loyalty sẵn sàng đồng hành, giúp doanh nghiệp đạt các mục tiêu kỳ vọng qua hoạt động...',
    },
    {
        icon: <FaUserShield className='reason-card-icon' />,
        title: 'THƯƠNG HIỆU',
        subtitle: 'Được nhiều doanh nghiệp lựa chọn',
        text: 'Smart Loyalty là đơn vị được các thương hiệu lớn tin tưởng lựa chọn giải pháp trong gần 10 năm',
    },
];

export function Reason() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-index'));
                        if (!visibleIndexes.includes(index)) {
                            setVisibleIndexes((prev) => [...prev, index]);
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = containerRef.current?.querySelectorAll('.reason-card') as NodeListOf<HTMLDivElement>;

        if (elements) {
            elements.forEach((el) => observer.observe(el));
        }

        return () => {
            if (elements) {
                elements.forEach((el) => observer.unobserve(el));
            }
        };
    }, [visibleIndexes]); // Thêm visibleIndexes vào dependency array

    return (
        <section className='reason'>
            <div className='reason-board'>
                <h2>TẠI SAO DOANH NGHIỆP LỰA CHỌN SMART LOYALTY?</h2>
                <div className='reason-list' ref={containerRef}>
                    {data.map((item, index) => (
                        <div
                            className={`reason-card ${visibleIndexes.includes(index) ? 'visible' : ''}`}
                            key={index}
                            data-index={index}
                            style={{
                                transition: `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`,
                                opacity: visibleIndexes.includes(index) ? 1 : 0,
                                transform: visibleIndexes.includes(index) ? 'translateY(0)' : 'translateY(30px)',
                            }}
                        >
                            {item.icon}
                            <h3>{item.title}</h3>
                            <h4>{item.subtitle}</h4>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}