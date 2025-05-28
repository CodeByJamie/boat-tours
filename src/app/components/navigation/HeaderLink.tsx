import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const HeaderLink = ({ name }: { name: string }) => {
	const [hover, setHover] = useState(false);

	return (
		<div
			onMouseOver={() => setHover(true)}
			onMouseOut={() => setHover(false)}
			className={`flex flex-col relative text-lg outline-none p-1`}
		>
			<Link href={`/${name === 'Home' ? '/' : name.toLowerCase()}`}>{name}</Link>
			<motion.div
				initial={false}
				animate={{ width: hover ? '100%' : '0%' }}
				transition={{ duration: 0.4 }}
				className={`absolute bg-current h-1 max-lg:h-0.5 rounded-lg bottom-0 left-0 cursor-pointer`}
			/>
		</div>
	);
};

export default HeaderLink;
