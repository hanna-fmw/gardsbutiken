'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type Props = {
	category: {
		name: string
		description: string
		image: string
	}
}

const CategoryCard = ({ category }: Props) => {
	const router = useRouter()

	return (
		<section
			onClick={() => router.push(`/${category.name}`)}
			className='cursor-pointer bg-white mt-2 md:w-[19vw] rounded-md mb-6'>
			<div className='relative'>
				<Image
					src={`/images/silver/${category.name}/${category.image}`}
					alt='Bild av smyckeskategori'
					width={250}
					height={200}
					className='object-cover h-[30vh] md:w-full md:h-[40vh]'
				/>
			</div>
			<div className='px-2'>
				<h2 className='font-lora my-1 text-sm font-medium'>
					{category.name === 'orhangen'
						? 'Örhängen'
						: category.name.charAt(0).toUpperCase() + category.name.slice(1).toLowerCase()}
				</h2>

				<p className='text-xs text-gray-500'>{category.description}</p>
			</div>
		</section>
	)
}

export default CategoryCard
