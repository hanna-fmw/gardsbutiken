import Link from 'next/link'
import React from 'react'

const Footer = () => {
	return (
		<footer className='w-screen pt-10 bg-[#212529]'>
			<section className='w-full py-16 grid grid-cols-3 font-lora text-white justify-center'>
				<div className='mx-auto'>
					<h2 className='font-medium text-xs md:text-base'>Kontakt</h2>
					<p className='text-xs mb-0'>
						<Link href='mailto:info@amdesign.se'>info@amdesign.se</Link>
					</p>
					<p>
						<a href='https://amdesign.se' target='_blank' rel='noopener noreferrer'>
							www.amdesign.se
						</a>
					</p>
					<p className='text-xs mb-0'>070-320&nbsp;46&nbsp;74</p>
				</div>
				<div className='mx-auto'>
					<h2 className='font-medium text-xs md:text-base'>Adress</h2>
					<div className='flex flex-col gap-2'>
						<p className='text-xs mb-0'>AnnaMaria Silverdesign</p>
						<p className='text-xs mb-0'>Gårdsbutiken, Stenegård</p>
						<p className='text-xs mb-0'>827&nbsp;54&nbsp;Järvsö</p>
					</div>
				</div>
				<div className='mx-auto'>
					<h2 className='font-medium text-xs md:text-base'>Sociala Medier</h2>
					<div className='flex flex-col gap-1'>
						<p className='text-xs mb-0'>
							<Link href='/'>Facebook</Link>
						</p>
						<p className='text-xs mb-0'>
							<Link href='/'>Instagram</Link>
						</p>
					</div>
				</div>
			</section>
			<section className='w-full h-[8vh] text-sm text-white bg-[#343A40] flex items-center pl-6'>
				<p
					className='flex items-center text-xs gap-3 font-light'
					style={{ transform: 'translateY(25%)' }}>
					&copy;2024 <span className='inline-block h-1 w-1 rounded-full bg-white'></span>{' '}
					Gårdsbutiken
				</p>
			</section>
		</footer>
	)
}

export default Footer
