
import './styles.sass';
import { Button } from '@shared-components';
import asset from '../../../../public/assets/asset';
import Image from 'next/image';
import Link from 'next/link';

export const SearchHeader = () => {
    return (
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

    );
};
