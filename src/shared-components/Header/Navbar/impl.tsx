
import './styles.sass';
import { Button } from '@shared-components';
import asset from '../../../../public/assets/asset';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <Image src='/assets/logo-black-text.png' alt='' width={1020} height={393} style={{ padding: 10 }} />
            </div>
            <ul>
                <li>
                    <Link href='/' className='navbar-item'>Trang chủ</Link>
                </li>
                <li>
                    <Link href='/san-pham' className='navbar-item'>Sản phẩm</Link>
                    <ul className='navbar-item-submenu'>
                        <li><Link href='/san-pham-1'>Sản phẩm 1</Link></li>
                        <li><Link href='/san-pham-2'>Sản phẩm 2</Link></li>
                        <li><Link href='/san-pham-2'>Sản phẩm 2</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href='/dich-vu' className='navbar-item'>Dịch vụ</Link>
                    <ul className='navbar-item-submenu'>
                        <li><Link href='/tu-van-loyalty-marketing'>Tư vấn Loyalty Marketing</Link></li>
                        <li><Link href='/san-pham-2'>Đào tạo nội bộ Loyalty Marketing</Link></li>
                        <li><Link href='/san-pham-2'>Đào tạo Public Loyalty Marketing</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href='/giai-phap' className='navbar-item'>Giải pháp</Link>
                </li>
                <li>
                    <Link href='/ve-smart-loyalty' className='navbar-item'>Về chúng tôi</Link>
                    <ul className='navbar-item-submenu'>
                        <li><Link href='/san-pham-1'>Sản phẩm 1</Link></li>
                        <li><Link href='/san-pham-2'>Sản phẩm 2</Link></li>
                        <li><Link href='/san-pham-2'>Sản phẩm 2</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href='/blog' className='navbar-item'>Blog</Link>
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
