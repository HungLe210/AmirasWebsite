import React from 'react'
import { Button } from '@shared-components';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hỗ trợ'
}
const page = () => {
    return (
        <div className='section'>
            <div className='service section banner'>

                <Button>Demo sản phẩm</Button>
                <Button>Demo sản phẩm</Button>
            </div>

            <div className='tough section p1'>

            </div>

        </div>
    )
}

export default page