'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { GoArrowRight } from 'react-icons/go'

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
			className='cursor-pointer bg-white mt-2 md:mx-auto md:w-[30vw] lg:w-[19vw] rounded-md md:mb-6 flex flex-col'>
			<div className='relative'>
				<Image
					src={`/images/silver/${category.name}/${category.image}`}
					alt='Bild av smyckeskategori'
					width={250}
					height={200}
					className='object-cover h-[30vh] md:w-full sm:h-[40vh] md:h-[40vh]'
				/>
			</div>

			<div className='px-2 flex-grow flex flex-col justify-between'>
				<h2 className='font-lora font-medium my-2 md:my-0 md:mt-1 text-sm lg:my-2'>
					{category.name === 'orhangen'
						? 'Örhängen'
						: category.name.charAt(0).toUpperCase() + category.name.slice(1).toLowerCase()}
				</h2>

				<p className='text-xs my-1'>{category.description}</p>
				<p className='text-xs' onClick={() => router.push(`/${category.name}`)}>
					<span className='mr-2 underline underline-offset-2'>Se urval</span>
					<GoArrowRight className='inline-block' />
				</p>
			</div>
		</section>
	)
}

export default CategoryCard
