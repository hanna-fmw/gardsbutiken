import Link from 'next/link'
import React from 'react'
import { FaHome } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

const Navbar = () => {
	return (
		<div
			className='w-screen flex justify-between items-center px-[20px] md:px-[70px] h-20 md:h-14'
			style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
			{/* <Link
				href='/'
				className='cursor-pointer font-semibold text-navbar-link-color hover:text-navbar-link-hover-color'>
				<IoMdGlobe size={25} />
			</Link> */}
			<div className='hidden md:block'></div>

			<nav className='flex gap-6 items-center'>
				<Link
					href='/'
					className='font-lora text-sm md:text-sm text-navbar-link-color hover:text-navbar-link-hover-color'>
					<FaHome size={15} />
				</Link>
				<Link href='/' className='text-navbar-link-color hover:text-navbar-link-hover-color'>
					<FaFacebook size={15} />
				</Link>
				<Link href='/' className='text-navbar-link-color hover:text-navbar-link-hover-color'>
					<FaInstagram size={15} fill='#fff' color='#fff' />
				</Link>
				<Link
					href='mailto:info@amdesign.se'
					className='text-navbar-link-color hover:text-navbar-link-hover-color'>
					<IoMail size={15} fill='#fff' color='#fff' />
				</Link>
			</nav>
		</div>
	)
}

export default Navbar
