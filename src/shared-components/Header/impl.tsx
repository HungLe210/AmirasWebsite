
import './styles.sass';
import { Button } from '@shared-components';
import asset from '../../../public/assets/asset';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
    return (

        < div className='header-section' >         {/* header-section */}

            {/* first-header */}
            < div className='header' >
                <div className='container'>
                    {/* first-header__ul */}
                    <ul>
                        <li>
                            <Link className='header-item' href='/'>
                                {/* header */}
                                <Image src={asset.search_icon.src} alt='' width={16.19} height={16} />
                            </Link>
                        </li>
                        <li>
                            <Link className='header-item' href='#'>Về Smart Loyalty</Link>
                        </li>
                        <li>
                            <Link className='header-item' href='#'>Sản phẩm</Link>
                        </li>
                        <li>
                            <Link className='header-item' href='#'>Dịch vụ</Link>
                        </li>
                        <li>
                            <Link className='header-item' href='#'>Liên hệ</Link>
                        </li>
                    </ul>

                </div>
            </div >
            <div className='navbar container'>
                <div className='navbar-logo'>
                    <Image src='/assets/logo-black-text.png' alt='' width={1020} height={393} style={{ padding: 10 }} />
                </div>
                <ul>
                    <li>
                        <Link href='/' className='navbar-item'>Trang chủ</Link>
                    </li>
                    <li>
                        <Link href='/san-pham' className='navbar-item'>Sản phẩm</Link>
                    </li>
                    <li>
                        <Link href='/dich-vu' className='navbar-item'>Dịch vụ</Link>
                    </li>
                    <li>
                        <Link href='/giai-phap' className='navbar-item'>Giải pháp</Link>
                    </li>
                    <li>
                        <Link href='/ve-smart-loyalty' className='navbar-item'>Về chúng tôi</Link>
                    </li>
                    <li>
                        <Link href='/blog' className='navbar-item'>Blog</Link>
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
        </div >
    );
};
