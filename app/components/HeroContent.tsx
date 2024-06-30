import Image from 'next/image'
import React from 'react'

type Props = {
	title: string
	titleMd?: string
	subheading?: string
	subheadingMd?: string
	h1Height?: string
	text?: string
	position?: string
	logo?: boolean
}

const HeroContent = ({
	title,
	titleMd,
	subheading,
	subheadingMd,
	text,
	position,
	logo = false,
}: Props) => {
	return (
		<div className={`absolute ${position}`}>
			<div className='md:hidden'>
				<h1 className='overflow-hidden font-lora z-10 text-[#fff] text-center text-lg'>{title}</h1>
				<p className='font-lora z-10 mb-0 text-[#fff] text-center text-xs'>{subheading}</p>
			</div>
			<div className='hidden md:block'>
				<h1 className='overflow-hidden font-lora z-10 text-hero-content-color text-center md:font-normal md:text-3xl'>
					{titleMd || title}
				</h1>
				<p className='font-lora z-10 mb-0 text-hero-content-color text-center md:text-base'>
					{subheadingMd || subheading}
				</p>
			</div>
			<p className='text-center z-10 text-hero-content-color'>
				<a
					href='https://amdesign.se/'
					className='cursor-pointer font-lora text-hero-content-color text-center underline underline-offset-2'>
					{text}
				</a>
			</p>
			{logo && (
				<div className='z-10 flex justify-center'>
					<Image
						src='/images/amdesign-logo.png'
						alt='AM Design Logo'
						width={20}
						height={20}
						className='w-6 h-6 rounded-full filter brightness-95'
					/>
				</div>
			)}
		</div>
	)
}

export default HeroContent
