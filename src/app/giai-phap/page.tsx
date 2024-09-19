import React from 'react'
import { Button } from '@shared-components';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Giải pháp'
}
const page = () => {
    return (
        <section className='section'>

            <div className='banner'>
            </div>
            <Button>Demo sản phẩm</Button>
        </section>
    )
}

export default page