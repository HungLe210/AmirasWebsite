import React from 'react'
import './styles.sass';
import { Button } from '@shared-components';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sản phẩm'
}
const page = () => {
    return (
        <section className='product'>
            <div className='product-header'>
                <div className='banner'>
                </div>

            </div>
            <Button>Demo sản phẩm</Button>

        </section>
    )
}

export default page