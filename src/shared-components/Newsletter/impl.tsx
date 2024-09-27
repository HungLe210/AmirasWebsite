'use client';
import React, { useEffect, useRef, useState } from 'react';
import './styles.sass';
import Image from 'next/image';
import { SignUpCard } from '@shared-components/Card';
import { FaRegCheckCircle } from 'react-icons/fa';
import { ScrollTopButton } from '@shared-components/ScrollTopButton';

export function Newsletter() {
    const [isVisible, setIsVisible] = useState(false); // State to control visibility
    const newsletterRef = useRef(null); // Ref for the newsletter section
    const signUpCardRef = useRef(null); // Ref for the SignUpCard

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Activate effect when newsletter enters viewport
                    observer.disconnect(); // Stop observing after it appears
                }
            },
            { threshold: 0.1 } // Trigger when 10% of element is in viewport
        );

        if (newsletterRef.current) {
            observer.observe(newsletterRef.current);
        }

        return () => {
            if (newsletterRef.current) {
                observer.unobserve(newsletterRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Activate effect when SignUpCard enters viewport
                    observer.disconnect(); // Stop observing after it appears
                }
            },
            { threshold: 0.1 } // Trigger when 10% of element is in viewport
        );

        if (signUpCardRef.current) {
            observer.observe(signUpCardRef.current); // Start observing SignUpCard
        }

        return () => {
            if (signUpCardRef.current) {
                observer.unobserve(signUpCardRef.current); // Stop observing when component unmounts
            }
        };
    }, []);

    return (
        <section className={`newsletter ${isVisible ? 'fade-in-bg' : ''}`} ref={newsletterRef}>
            <div className='newsletter-content'>
                <div className='newsletter-details'>
                    <p><strong>Smart Loyalty - Smart Choice</strong></p>
                    <div>
                        <p><FaRegCheckCircle className='icon' />Giải pháp toàn diện</p>
                        <p><FaRegCheckCircle className='icon' />Phù hợp doanh nghiệp Việt</p>
                        <p><FaRegCheckCircle className='icon' />Dễ dàng sử dụng</p>
                        <p><FaRegCheckCircle className='icon' />Dễ đo lường, đánh giá hiệu quả</p>
                    </div>
                    <p>Sẵn sàng đồng hành và hỗ trợ doanh nghiệp!</p>
                    <Image src='/assets/CRM_6.png' width={268} height={200} alt='' />
                </div>
                <div id='sign_up_form' className={`newsletter-item ${isVisible ? 'fade-in' : ''}`} ref={signUpCardRef}>
                    <SignUpCard />
                </div>
            </div>
        </section>
    );
}
