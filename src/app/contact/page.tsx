// app/contact/page.tsx

'use client';

import { useState } from 'react';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import Image from 'next/image';
import { BiMailSend } from 'react-icons/bi';
import OnScreenHelp from '../components/helpButton';

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitted(true);
		setFormData({ name: '', email: '', message: '' });
	};

	return (
		<div className='relative bg-white min-h-screen flex flex-col'>

                  <div className="relative w-screen h-[45dvh] bg-zinc-900 ">
                        <Image src={'/banner-loch.jpg'} fill alt='banner' className='opacity-80'/>
                        <div className='absolute -bottom-5 left-0 w-full z-50'>
					<img src='/bottom_wave_divider.svg' alt='wave bottom' className='w-full' />
				</div>
                  </div>
			<Header />

			<main className='relative flex-grow px-4 py-16 max-w-4xl mx-auto'>
				<h1 className='flex items-center gap-2 text-4xl font-bold text-blue-900 mb-4'><BiMailSend className='place-items-center pt-1' /> Contact Us</h1>
				<p className='text-gray-600 mb-8'>
					We’d love to hear from you. Please fill out the form and we’ll get back to you shortly.
				</p>

				{submitted && <p className='mb-6 text-green-600 font-medium'>Thanks! We’ll be in touch shortly.</p>}

				<form onSubmit={handleSubmit} className='space-y-6'>
					<div>
						<label htmlFor='name' className='block text-sm font-semibold text-gray-700'>
							Name
						</label>
						<input
							type='text'
							name='name'
							id='name'
							value={formData.name}
							onChange={handleChange}
							required
							className='mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2'
						/>
					</div>

					<div>
						<label htmlFor='email' className='block text-sm font-semibold text-gray-700'>
							Email
						</label>
						<input
							type='email'
							name='email'
							id='email'
							value={formData.email}
							onChange={handleChange}
							required
							className='mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2'
						/>
					</div>

					<div>
						<label
							htmlFor='message'
							className='block text-sm font-semibold text-gray-700'
						>
							Message
						</label>
						<textarea
							name='message'
							id='message'
							rows={5}
							value={formData.message}
							onChange={handleChange}
							required
							className='mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2'
						/>
					</div>

					<button
						type='submit'
						className='bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-800 transition'
					>
						Send Message
					</button>
				</form>
			</main>

			<Footer />
                  <OnScreenHelp />
		</div>
	);
}
