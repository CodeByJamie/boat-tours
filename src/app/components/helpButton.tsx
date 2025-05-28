'use client';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { IoBoat } from 'react-icons/io5';
import { MdPlayArrow } from 'react-icons/md';

const OnScreenHelp = () => {
	const [assistanceScreen, setAssistanceScreen] = useState(false);
	const [assistanceModal, setAssistanceModal] = useState(false);

	return (
		<>
			<div
				className='flex items-center justify-center fixed right-5 bottom-5 max-lg:bottom-7 h-16 w-16 rounded-full bg-[#003480] text-white hover:border-navy hover:bg-transparent border-2 border-transparent duration-300 hover:text-[#003480] cursor-pointer z-[99999999999999999999]'
				onMouseOver={() => setAssistanceScreen(true)}
				onMouseLeave={() => setAssistanceScreen(false)}
				onClick={() => setAssistanceModal(true)}
			>
				{assistanceScreen && (
					<div className='absolute bottom-0 -left-40 bg-[#003480] w-32 text-white py-2 px-5 rounded-md'>
						<p>Click me to get assistance</p>
						<MdPlayArrow className='absolute bottom-6 -right-4 size-7 text-[#003480]' />
					</div>
				)}
				<IoBoat className='size-10' />
			</div>
			{assistanceModal && (
				<div className='fixed bottom-32 right-10 max-lg:left-10 z-[99999999999] border bg-zinc-100 rounded-lg p-5'>
					<h2 className='text-3xl text-[#003480] font-semibold'>Need Assistance? </h2>
					<p className='text-lg text-gray-700'>
						Please send your enquiry to <strong>info@ballachulishtours.com</strong>
					</p>
					<XMarkIcon
						className='size-7 absolute top-2 right-2 text-red-500 cursor-pointer'
						onClick={() => setAssistanceModal(false)}
					/>
				</div>
			)}
		</>
	);
};

export default OnScreenHelp;
