'use client';
import Image from 'next/image';
import Link from 'next/link';
import HeaderLink from './HeaderLink';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
	const [dropdown, setDropDown] = useState(false);

	return (
		<header className={`lg:fixed absolute text-white p-6 w-full z-[99999999999999999999999]`}>
			<nav className='max-w-6xl mx-auto flex justify-between items-center'>
				{/* Logo */}
				<Image src='/logo.png' alt='Ballachulish Boat Tours' width={150} height={50} />

				{/* Navigation Links */}
				<div className='max-lg:hidden relative flex gap-16 items-center '>
					<HeaderLink name='Home' />
					<HeaderLink name='Tours' />
					<HeaderLink name='About' />
					<HeaderLink name='Contact' />
				</div>
				{/* Book Now Button */}
				<Link
					href='/book'
					className='bg-navy text-white px-6 py-3 rounded-full hover:bg-transparent transition duration-300 border-2 border-transparent hover:border-navy max-lg:hidden'
				>
					Book Now
				</Link>

				<div className='relative lg:hidden'>
					<Bars3Icon
						className='size-8 z-[99999999999999999] cursor-pointer hover:text-navy duration-500 '
						onClick={() => setDropDown(!dropdown)}
					/>

					<AnimatePresence>
						{dropdown && (
							<motion.div
								className='absolute -left-7 flex flex-col gap-6 items-center mt-3 z-[999] bg-navy/60 p-2 rounded-xl'
								initial={{ x: 30, opacity: 0 }}
								animate={{ x: -10, opacity: 1 }}
								transition={{ duration: 0.5 }}
								exit={{ x: 30, opacity: 0 }}
							>
								<HeaderLink name='Home' />
								<HeaderLink name='Tours' />
								<HeaderLink name='About' />
								<HeaderLink name='Contact' />
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</nav>
		</header>
	);
};

export default Header;
