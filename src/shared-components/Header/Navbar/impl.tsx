
import './styles.sass';
import { Button } from '@shared-components';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <Image src='/assets/logo-black-text.png' alt='' width={153} height={80} style={{ padding: 10 }} />
            </div>
            <ul>
                <li>
                    <Link href='/' className='navbar-item'>Trang chủ</Link>
                </li>
                <li>
                    <Link href='/san-pham' className='navbar-item'>Sản phẩm</Link>
                </li>
                <li>
                    <Link href='/dich-vu' className='navbar-item'>Dịch vụ <IoIosArrowDown /></Link>

                    <ul className='navbar-item-submenu'>
                        <li><Link href='/dich-vu/tu-van-loyalty-marketing'>Tư vấn Loyalty Marketing</Link></li>
                        <li><Link href='/dich-vu/dao-tao-noi-bo-loyalty-marketing'>Đào tạo nội bộ Loyalty Marketing</Link></li>
                        <li><Link href='/dich-vu/dao-tao-public-loyalty-marketing'>Đào tạo Public Loyalty Marketing</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href='/giai-phap' className='navbar-item'>Giải pháp <IoIosArrowDown /></Link>

                </li>
                <li>
                    <Link href='/ve-smart-loyalty' className='navbar-item'>Về chúng tôi <IoIosArrowDown /></Link>

                    <ul className='navbar-item-submenu'>
                        <li><Link href='/san-pham-1'>Sản phẩm 1</Link></li>
                        <li><Link href='/san-pham-2'>Sản phẩm 2</Link></li>
                        <li><Link href='/san-pham-2'>Sản phẩm 2</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href='/blog' className='navbar-item'>Blog</Link>
                    <IoIosArrowDown />
                    <ul className='navbar-item-submenu'>
                        <li><Link href='/san-pham-1'>Blog</Link></li>
                        <li><Link href='/san-pham-2'>E-book</Link></li>
                        <li><Link href='/san-pham-2'>Sự kiện</Link></li>
                        <li><Link href='/san-pham-2'>Video & Podcast</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href='/ho-tro' className='navbar-item'>Hỗ trợ</Link>
                </li>
            </ul>
            <div>
                <Button >
                    Tư vấn
                </Button>
            </div>
        </div>

    );
};
