import { Button } from '@shared-components'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import './styles.sass';
import { solutionData as mockData } from 'constants/mockData';


export function Solution() {
    //const [solutionData, setSolutionData] = useState(mockData);
    const solutionData = mockData;
    return (
        <section className='solution'>
            <div className='bg-1 bg-loaded'></div>
            <div className='bg-2 bg-loaded'>
                <div className='solution-board'>
                    <h2>{solutionData.heading}</h2>
                    <h3>{solutionData.subheading}</h3>
                    <div className='solution-list'>
                        {solutionData.cards.map((card) => (
                            <div className='solution-card' key={card.id}>
                                <Image src={card.imageUrl} width={533} height={400} alt={card.title} />
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                                <Link href={card.link}>
                                    <Button hasShadow hasSpecialHover>Chi tiết</Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};