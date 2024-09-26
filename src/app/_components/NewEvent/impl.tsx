'use client';
import { useEffect, useRef, useCallback, useState } from 'react';
import { ServiceCard } from '@shared-components/Card';
import './styles.sass';
const data: ServiceCardType[] = [
    {
        category: {
            name: 'Tư vấn Loyalty Marketing',
            url: '/dich-vu/tu-van-loyalty-marketing',
        },
        items: [
            {
                detailUrl: '#',
                title: 'Tư vấn chiến lược, thiết kế chương trình loyalty hiệu quả cho doanh nghiệp',
                img: '/assets/Service/Tu-van-Loyalty.png',
            },
        ],
    },
    {
        category: {
            name: 'Đào tạo nội bộ Loyalty Marketing',
            url: '/dich-vu/dao-tao-noi-bo-loyalty-marketing',
        },
        items: [
            {
                detailUrl: '#',
                title: 'Tư vấn chiến lược, thiết kế chương trình loyalty hiệu quả cho doanh nghiệp',
                img: '/assets/Service/Tu-van-Loyalty.png',
            },
        ],
    },
    {
        category: {
            name: 'Đào tạo Public Loyalty Marketing',
            url: '/dich-vu/dao-tao-public-loyalty-marketing',
        },
        items: [
            {
                detailUrl: '#',
                title: 'Tư vấn chiến lược, thiết kế chương trình loyalty hiệu quả cho doanh nghiệp',
                img: '/assets/Service/Tu-van-Loyalty.png',
            },

        ],
    },
];

export function NewEvent() {
    const serviceCardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [renderedCards, setRenderedCards] = useState<number[]>([]);

    const setRef = useCallback((el: HTMLDivElement | null, index: number) => {
        serviceCardRefs.current[index] = el;
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, idx) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('fade-in');
                        setRenderedCards((prev) => [...prev, idx]);
                        observer.unobserve(entry.target);
                    }, idx * 200);
                }
            });
        }, { threshold: 0.1 });

        serviceCardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className='event'>
            <div className='event-board'>
                <h2>SỰ KIỆN MỚI NHẤT</h2>
                <div className='event-list'>
                    {data.map((item, index) => {
                        return (
                            <ServiceCard
                                key={index}
                                category={item.category}
                                items={item.items}
                                ref={(el) => setRef(el, index)}
                                className={`service-card ${renderedCards.includes(index) ? 'fade-in' : ''}`}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}