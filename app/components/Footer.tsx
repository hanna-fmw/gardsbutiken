import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

const Footer = () => {
	return (
		<footer className='w-screen pt-10 bg-[#212529]'>
			<section className='w-full pb-2 md:py-16 grid grid-cols-2 md:grid-cols-3 font-lora text-[#fff] justify-center'>
				<div className='mx-auto'>
					<h2 className='font-medium text-xs md:text-base'>Kontakt</h2>
					<p className='text-[10px] mb-1 sm:text-xs'>
						<a href='mailto:info@amdesign.se'>info@amdesign.se</a>
					</p>
					<p className='text-[10px] mb-1 sm:text-xs'>
						<a href='https://amdesign.se'>www.amdesign.se</a>
					</p>

					<p className='text-[10px] mb-1 sm:text-xs'>070-320&nbsp;46&nbsp;74</p>
				</div>
				<div className='mx-auto'>
					<h2 className='font-medium text-xs md:text-base'>Adress</h2>
					<div className='flex flex-col md:gap-2'>
						<p className='text-[10px] mb-1 sm:text-xs'>AM Design</p>
						<p className='text-[10px] mb-1 sm:text-xs'>Gårdsbutiken, Stenegård</p>
						<p className='text-[10px] mb-1 sm:text-xs'>827&nbsp;54&nbsp;Järvsö</p>
					</div>
				</div>
				<div className='hidden md:block md:mx-auto'>
					<h2 className='font-medium text-xs md:text-base'>Sociala Medier</h2>
					<div className='flex flex-col gap-1'>
						<p className='text-[10px] mb-1 sm:text-xs'>
							<Link href='/'>Facebook</Link>
						</p>
						<p className='text-[10px] mb-1 sm:text-xs'>
							<Link href='/'>Instagram</Link>
						</p>
					</div>
				</div>
			</section>
			<section className='pb-8 w-[90vw] mt-[1.5rem] gap-6 flex justify-center md:hidden'>
				<a
					href='https://www.facebook.com/designbyam.se/?locale=sv_SE'
					className='text-navbar-link-color hover:text-navbar-link-hover-color'>
					<FaFacebook size={15} />
				</a>
				<a
					href='https://www.instagram.com/gardsbutiken_stenegard?igsh=MXh2bm1iMm5tMzllOA=='
					className='text-navbar-link-color hover:text-navbar-link-hover-color'>
					<FaInstagram size={15} fill='#fff' color='#fff' />
				</a>
				<a
					href='mailto:info@amdesign.se'
					className='text-navbar-link-color hover:text-navbar-link-hover-color'>
					<IoMail size={15} fill='#fff' color='#fff' />
				</a>
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
