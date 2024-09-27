'use client';
import { useEffect, useRef, useCallback, useState } from 'react';
import { ServiceCard } from '@shared-components/Card';
import './styles.sass';
import { ServiceCardItem } from '@shared-components/Card/ServiceCard/types';
const data: ServiceCardItem[] = [
    {
        detailUrl: '#',
        title: 'Tư vấn chiến lược, thiết kế chương trình loyalty hiệu quả cho doanh nghiệp',
        img: '/assets/Service/Tu-van-Loyalty.png',
    },
    {
        detailUrl: '#',
        title: 'Tư vấn chiến lược, thiết kế chương trình loyalty hiệu quả cho doanh nghiệp',
        img: '/assets/Service/Tu-van-Loyalty.png',
    },
    {
        detailUrl: '#',
        title: 'Tư vấn chiến lược, thiết kế chương trình loyalty hiệu quả cho doanh nghiệp',
        img: '/assets/Service/Tu-van-Loyalty.png',
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
            if (card) {
                observer.observe(card);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (<section className='new-event'>

        <div className='new-event-board'>
            <h2>SỰ KIỆN MỚI NHẤT</h2>
            <div className='new-event-list'>
                {data.map((item, index) => {
                    return (
                        <ServiceCard
                            key={index}
                            item={item}

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