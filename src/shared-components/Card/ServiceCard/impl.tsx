import { Button } from '@shared-components/Button';
import Image from 'next/image';
import './styles.sass';
import Link from 'next/link';
export const ServiceCard = ({
    category,detailUrl,img,title
}:ServiceCardType) => {
	
	return (
		<div className="service-card">
            <div className="service-card-header">
                <p>Dịch vụ</p>
                <div className="service-card-header-category">
                    <Link href={'#'}><h2>{category.name}</h2></Link>
                    <Button>
                        <span>xem tất cả</span>
                        <Image
                            className="icon"
                            color="white"
                            src={'/assets/next-white.png'}
                            height={8}
                            width={8}
                            alt=""
                        />
                    </Button>
                </div>
            </div>
            <div className="service-card-list">
                <div className="service-card-content">
                    <div className='box-zoom-out'>
                        <Image
                            className="service-card-content-image"
                            src={img}
                            width={1067}
                            height={800}
                            alt=""
                        />
                    </div>
                    
                    <div className="service-card-content-details">
                        <p className="service-card-content-title ">{title}</p>
                        <Button><Link href={detailUrl} >chi tiết</Link></Button>
                    </div>
                </div>
                <div className="service-card-content">
                    <div className='box-zoom-out'>
                        <Image
                            className="service-card-content-image"
                            src={img}
                            width={1067}
                            height={800}
                            alt=""
                        />
                    </div>
                    
                    <div className="service-card-content-details">
                        <p className="service-card-content-title ">{title}</p>
                        <Button><Link href={detailUrl} >chi tiết</Link></Button>
                    </div>
                </div>
                <div className="service-card-content">
                    <div className='box-zoom-out'>
                        <Image
                            className="service-card-content-image"
                            src={img}
                            width={1067}
                            height={800}
                            alt=""
                        />
                    </div>
                    
                    <div className="service-card-content-details">
                        <p className="service-card-content-title ">{title}</p>
                        <Button><Link href={detailUrl} >chi tiết</Link></Button>
                    </div>
                </div>
                
            </div>
            
		</div>
	);
};
