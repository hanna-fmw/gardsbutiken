import React from 'react'

import Link from 'next/link'

type Props = {
	title: string
	subheading?: string
	h1Height?: string
	text?: string
	position?: string
}

const HeroContent = ({ title, subheading, text, position }: Props) => {
	return (
		<div className={`absolute ${position}`}>
			<h1
				className={`overflow-hidden font-lora z-10 text-hero-content-color text-center text-2xl md:text-3xl`}>
				{title}
			</h1>

			<p className={`font-lora z-10 mb-0 text-hero-content-color text-center text-sm md:text-base`}>
				{subheading}
			</p>
			<p className='text-center z-10 text-hero-content-color'>
				<a
					href='https://amdesign.se/'
					className={`cursor-pointer font-lora text-hero-content-color text-center underline underline-offset-2`}>
					{text}
				</a>
			</p>
		</div>
	)
}

export default HeroContent
