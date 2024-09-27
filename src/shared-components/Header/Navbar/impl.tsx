'use client'
import React, { useState } from 'react';
import { navbarData } from '@constants/mockData';
import './styles.sass';
import { Button } from '@shared-components';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";
import { useScroll } from '@hooks';

export function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const attribute = useScroll(100, '');


    // const [isSticky, setIsSticky] = useState(false);
    // const stickyThreshold = 100;
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollY = window.scrollY;
    //         if (scrollY > stickyThreshold && !isSticky) {
    //             setIsSticky(true);
    //         } else if (scrollY <= stickyThreshold && isSticky) {
    //             setIsSticky(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [isSticky]); // Thêm isSticky vào dependency array

    return (
        <section className={`nav ${attribute ? 'sticky' : ''} `}>
            <div className='navbar'>
                <div className='navbar-logo'>
                    <Image src='/assets/logo-black-text.png' alt='' width={153} height={80} style={{ padding: 10 }} />
                </div>
                <div className='navbar-hamburger' onClick={() => {
                    console.log(isMenuOpen);
                    setIsMenuOpen(!isMenuOpen)
                }}>
                    <IoIosMenu size={30} />
                </div>
                <ul className={`navbar-items ${isMenuOpen ? 'open' : ''}`}>
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

                {isMenuOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>}

                <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="sidebar-items">
                        {navbarData.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href} className="sidebar-item">
                                    {item.label} {item.submenu.length > 0 && <IoIosArrowDown />}
                                </Link>
                                {item.submenu.length > 0 && (
                                    <ul className="sidebar-item-submenu">
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
                </div>
                <div className='navbar-btn'>
                    <Link href='#sign_up_form'><Button>Tư vấn</Button></Link>
                </div>
            </div>
        </section>
    );
}


