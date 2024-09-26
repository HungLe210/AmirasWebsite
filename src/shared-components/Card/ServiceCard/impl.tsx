import { Button } from '@shared-components/Button';
import Image from 'next/image';
import './styles.sass';
import Link from 'next/link';
export const ServiceCard = (cardDetail: ServiceCardType) => {
	return (
		<div className="service-card">
			<div className="service-card-list">
				{cardDetail.items.map((card, index) => {
					return (
						<div className="service-card-content" key={index}>
							<div className="box-zoom-out">
								<Image
									className="service-card-content-image"
									src={card.img}
									width={1067}
									height={800}
									alt=""
								/>
							</div>

							<div className="service-card-content-details">
								<h5 className="service-card-content-title ">{card.title}</h5>
								<Button>
									<Link href={card.detailUrl}>chi tiết</Link>
								</Button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
