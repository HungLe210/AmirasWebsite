import { Button } from '@shared-components'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import './styles.sass';
import { solutionData as mockData } from 'constants/mockData';
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