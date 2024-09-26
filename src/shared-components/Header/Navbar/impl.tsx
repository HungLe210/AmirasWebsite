'use client'
import React, { useEffect, useState } from 'react';
import { navbarData } from '@constants/mockData';
import './styles.sass';
import { Button } from '@shared-components';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";

export function Navbar() {
    const [isSticky, setIsSticky] = useState(false);
    const stickyThreshold = 100;

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > stickyThreshold && !isSticky) {
                setIsSticky(true);
            } else if (scrollY <= stickyThreshold && isSticky) {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isSticky]); // Thêm isSticky vào dependency array

    return (
        <section className={`nav ${isSticky ? 'sticky' : ''} `}>
            <div className='navbar'>
                <div className='navbar-logo'>
                    <Image src='/assets/logo-black-text.png' alt='' width={153} height={80} style={{ padding: 10 }} />
                </div>
                <ul>
                    {navbarData.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className='navbar-item'>
                                {item.label} {item.submenu.length > 0 && <IoIosArrowDown />}
                            </Link>
                            {item.submenu.length > 0 && (
                                <ul className='navbar-item-submenu'>
                                    {item.submenu.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                            <Link href={subItem.href}>{subItem.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
                <div>
                    <Link href='#sign_up_form'><Button>Tư vấn</Button></Link>
                </div>
            </div>
        </section>
    );
}
