import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Hình thức thanh toán'
};

// Dữ liệu JSON
const paymentData =
{
    title: 'HÌNH THỨC THANH TOÁN',
    content: 'Nội dung cho Hình thức thanh toán'
};


export default function PaymentMethod() {
    return (
        <div>

            <h1>{paymentData.title}</h1>
            <p>{paymentData.content}</p>
        </div>


    );
};
