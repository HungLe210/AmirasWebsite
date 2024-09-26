import { Button } from '@shared-components'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import './styles.sass';
import { Carousel } from '@shared-components/Carousel';

export function ChildBlog() {
    return (
        <section className='childblog'>
            <Carousel uniqueID='event' shape='circle'/>
        </section>
    )
}

