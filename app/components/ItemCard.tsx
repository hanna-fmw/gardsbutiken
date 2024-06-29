'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GoArrowRight } from 'react-icons/go'
import { useRouter } from 'next/navigation'

type Props = {
	item: {
		id: number
		category: string
		model_name: string
		slug_name: string
		short_description: string
		price: string
		image: string
		url: string
	}
}

const ItemCard = ({ item }: Props) => {
	const router = useRouter()
	return (
		<section
			onClick={() => router.push(`/${item.url}`)}
			className='cursor-pointer bg-[#fafafa] mt-2 md:w-[19vw] rounded-md mb-6 flex flex-col'>
			<div className='relative'>
				<Image
					src={`/images/silver/${item.category}/${item.image}`}
					alt='Bild av smycke'
					width={250}
					height={200}
					className='object-cover h-[30vh] md:w-full md:h-[40vh]'
				/>
			</div>
			<div className='px-2 flex-grow flex flex-col justify-between'>
				<div>
					<div className='flex justify-between mt-2'>
						<h2 className='font-lora mb-2 text-sm md:text-xs font-medium'>{item.model_name}</h2>
						<p className='font-lora mb-1 text-xs'>{item.price}</p>
					</div>
					<p className='text-xs'>{item.short_description}</p>
				</div>
				<p className='text-xs mt-2'>
					<Link href={item.url} className='hover:underline hover:underline-offset-2'>
						<span className='mr-2'>Läs mer och handla</span>
						<GoArrowRight className='inline-block' />
					</Link>
				</p>
			</div>
		</section>
	)
}

export default ItemCard
