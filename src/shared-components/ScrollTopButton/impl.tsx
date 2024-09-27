'use client';
import React, { useEffect, useState } from 'react';
import './styles.sass'
import { IoIosArrowUp } from "react-icons/io";
import Link from 'next/link';
import { useScroll } from '@hooks';

export function ScrollTopButton() {
    const attribute = useScroll(1000, 'scroll');
    // const [isAppear, setIsAppear] = useState(false);
    // const appearThreshold = 1000;
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollY = window.scrollY;
    //         if (scrollY > appearThreshold && !isAppear)
    //             setIsAppear(true);
    //         else if (scrollY < appearThreshold && isAppear)
    //             setIsAppear(false);
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     }
    // }, [isAppear]);

    return (
        <Link href='#nav' className={`scroll ${attribute ? 'appear' : ''} `}>
            <IoIosArrowUp className='scroll-arrow' />
        </Link >
    );
};


