import Link from 'next/link';
import React from 'react';
import './styles.sass';
export function Newspaper() {
    //const [solutionData, setSolutionData] = useState(mockData);
    // const solutionData = mockData;
    return (
        <section className='newspaper'>
            <Link href='/blog' style={{ textDecoration: 'none' }}><h2>
                <strong>
                    Báo chí nói về Smart Loyalty
                </strong>
            </h2></Link>
        </section >
    );
};