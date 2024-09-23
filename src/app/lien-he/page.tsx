import React from 'react';
import './styles.sass';
import Image from 'next/image';


const page = () => {
    return (
        <section className='contact'>
            <div className='service-header'>
                <div className='service-header-content'>
                    <h1>Liên hệ</h1>
                </div>
            </div>

            <section className='contact-content'>
                <div className='contact-info'>
                    <div className='contact-info-item'>
                        <Image src='/assets/Contact/map.png' width={50} height={50} alt='' />
                        <div className='contact-info-item-details'>
                            <h3>Liên hệ</h3>
                            <p>Trụ sở chính: Tầng 6, Tòa nhà Việt Á, số 9 Duy Tân,</p>
                            <p> Phường Nghãi Tân, Quận Cầu Giấy, HN.</p>
                        </div>
                    </div>
                    <div className='contact-info-item'>
                        <Image src='/assets/Contact/email.png' width={50} height={50} alt='' />
                        <div className='contact-info-item-details'>
                            <h3>Địa chỉ</h3>
                            <p>Hotline: 098 3399 866</p>
                            <p>Email: info@smartloyalty.vn</p>
                        </div>
                    </div>
                    <div className='contact-info-item'>
                        <Image src='/assets/Contact/wall-clock.png' width={50} height={50} alt='' />
                        <div className='contact-info-item-details'>
                            <h3>Thời gian làm việc</h3>
                            <p>Từ thứ Hai – thứ Sáu: 9h – 18h
                                (GMT +7)</p>
                        </div>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29792.698028145514!2d105.78461681049458!3d21.029194495893663!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aba48b091fcf%3A0x61dee8f403bdfa7e!2zQ8OUTkcgVFkgQ-G7lCBQSOG6pk4gxJDhuqZVIFTGryBWw4AgUEjDgVQgVFJJ4buCTiBDw5RORyBOR0jhu4YgU01BUlQgTE9ZQUxUWSBRVeG7kEMgVOG6vg!5e0!3m2!1svi!2s!4v1688020847291!5m2!1svi!2s" width="100%" height="350" ></iframe>
            </section>
        </section>
    )
}

export default page;
