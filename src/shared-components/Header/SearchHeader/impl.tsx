
import './styles.sass';
import { Button } from '@shared-components';
import asset from '../../../../public/assets/asset';
import Image from 'next/image';
import Link from 'next/link';
import { FaMagnifyingGlass } from "react-icons/fa6";

export function SearchHeader() {
    return (
        < div className='header' >
            <div className='container'>
                {/* first-header__ul */}
                <span className='header-title'>Smart Loyalty giải pháp trọn gói</span>
                <ul>
                    <li>
                        <Link className='header-item' href='/'>
                            {/* header */}
                            <FaMagnifyingGlass style={{ color: 'white' }} />
                        </Link>
                    </li>
                    <li>
                        <Link className='header-item' href='/ve-chung-toi'>Về Smart Loyalty</Link>
                    </li>
                    <li>
                        <Link className='header-item' href='/san-pham'>Sản phẩm</Link>
                    </li>
                    <li>
                        <Link className='header-item' href='/dich-vu'>Dịch vụ</Link>
                    </li>
                    <li>
                        <Link className='header-item' href='/lien-he'>Liên hệ</Link>
                    </li>
                </ul>

            </div>
        </div >

    );
};
