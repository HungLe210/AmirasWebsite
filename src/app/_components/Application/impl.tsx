'use client'
import { useEffect, useRef, useCallback, useState } from 'react';
import { Button } from '@shared-components';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import './styles.sass';

export function Application() {
    const appCardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [renderedCards, setRenderedCards] = useState<number[]>([]);

    const setRef = useCallback((el: HTMLDivElement | null, index: number) => {
        appCardRefs.current[index] = el;
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, idx) => {
                if (entry.isIntersecting) {
                    // Apply delay based on index to create staggered effect
                    setTimeout(() => {
                        entry.target.classList.add('fade-in');
                        setRenderedCards((prev) => [...prev, idx]); // Add index to the list of rendered cards
                        observer.unobserve(entry.target);
                    }, idx * 200); // Delay of 200ms for each card
                }
            });
        }, { threshold: 0.1 });

        appCardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className='app'>
            <div className='app-board'>
                <h2>NHIỀU LĨNH VỰC ỨNG DỤNG SMART LOYALTY</h2>
                <div className='app-list'>
                    {[
                        { src: '/assets/Home/Bank.png', text: 'Tài chính - Ngân hàng' },
                        { src: '/assets/Home/Food.png', text: 'Dịch vụ ăn uống (FnB)' },
                        { src: '/assets/Home/Shopping.png', text: 'Bán lẻ' },
                        { src: '/assets/Home/Health.png', text: 'Sức khỏe - Làm đẹp' },
                        { src: '/assets/Home/Hotel.png', text: 'Du lịch - Khách sạn' },
                        { src: '/assets/Home/Coop.png', text: 'B2B' },
                    ].map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => setRef(el, index)}
                            className={`app-card col-inner hidden ${renderedCards.includes(index) ? 'fade-in' : ''}`}
                        >
                            <Image src={item.src} width={90} height={90} alt='' />
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
                <Link href='#sign_up_form'>
                    <Button hasShadow hasSpecialHover>Đăng ký tư vấn</Button>
                </Link>
            </div>
        </section>
    );
}
