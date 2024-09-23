import React from 'react'
import './styles.sass';
import { Button } from '@shared-components';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sản phẩm'
}
const page = () => {
    return (
        <div className='section'>
            <div className='banner'>
            </div>
            <Button>Demo sản phẩm</Button>
        </div>
    )
}

export default page