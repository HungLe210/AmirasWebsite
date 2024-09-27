import React from 'react';
import Image from 'next/image';
import './styles.sass';
export function Difficult() {
    //const [solutionData, setSolutionData] = useState(mockData);
    // const solutionData = mockData;
    return (
        <section className='difficult'>
            <div className='difficult-board'>
                <h2 style={{ fontSize: '30px', fontWeight: '500' }}>
                    Doanh nghiệp đang đối mặt với những khó khăn…
                </h2>
                <div className='difficult-list'>
                    <div className='difficult-card'>
                        <Image src='/assets/Home/CRM_7.png' width={533} height={400} alt='' />
                        <h3>Không nhận diện được khách hàng trung thành</h3>
                        <div className='is-divider'></div>
                        <p>Không có hệ thống ghi dữ liệu về khách hàng hoặc có hệ thống nhưng dữ liệu không đầy đủ dẫn đến khó phân tích, đánh giá và nắm bắt hành vi, sở thích, thói quen của khách hàng cũng như nhận diện nhóm khách hàng trung thành để có kế hoạch chăm sóc, bán hàng phù hợp. .</p>

                    </div>
                    <div className='difficult-card'>
                        <Image src='/assets/Home/CRM_0.png' width={533} height={400} alt='' />
                        <h3>Khó đo lường hiệu quả chương trình khách hàng trung thành</h3>
                        <div className='is-divider'></div>
                        <p>Thiếu công cụ thông minh để thiết lập, theo dõi và đo lường hiệu quả các chương trình cho khách hàng trung thành dẫn đến tình trạng lãng phí (tài chính, nhân sự…) để vận hành các chương trình mà không mang lại kết quả mong muốn (về doanh thu, thị phần,…)</p>

                    </div>
                    <div className='difficult-card'>
                        <Image src='/assets/Home/CRM_7.png' width={533} height={400} alt='' />
                        <h3>Chưa biết tối ưu giá trị trên mỗi khách hàng</h3>
                        <div className='is-divider'></div>
                        <p>Doanh nghiệp có thể sở hữu dữ liệu lớn về khách hàng nhưng chưa có một cơ sở dữ liệu tập trung giúp dễ dàng phân tích, đánh giá để thấu hiểu khách hàng và dự đoán các hành vi, xu hướng trong tương lai, từ đó tối ưu giá trị trên mỗi khách hàng mà doanh nghiệp đang có.</p>

                    </div>
                </div>
            </div>

        </section >
    );
};