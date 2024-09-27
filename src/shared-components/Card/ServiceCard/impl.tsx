
import { Button } from '@shared-components/Button';
import Image from 'next/image';
import './styles.sass';
import Link from 'next/link';
import React, { forwardRef } from 'react';
import { ServiceCardItem} from './types';

export const ServiceCard = forwardRef<
	HTMLDivElement,
	{ item: ServiceCardItem; className?: string }
>(({ item, className }, ref) => {
	return (
		<div className={`service-card`} ref={ref}>
			<div className="service-card-content">
				<div className="box-zoom-out">
					<Image
						className="service-card-content-image"
						src={item.img}
						width={1067}
						height={800}
						alt=""
					/>
				</div>

				<div className="service-card-content-details">
					<h5 className="service-card-content-title">{item.title}</h5>
					<Button>
						<Link href={item.detailUrl}>chi tiết</Link>
					</Button>
				</div>
			</div>
		</div>
	);
});
