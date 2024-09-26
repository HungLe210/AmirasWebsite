
import './styles.sass';
import Link from 'next/link';
import { SearchHeader } from './SearchHeader';
import { Navbar } from './Navbar';

export const Header = () => {
    return (
        <section className='header-section' >
            <SearchHeader />
            <nav><Navbar /></nav>
        </section >
    );
};
