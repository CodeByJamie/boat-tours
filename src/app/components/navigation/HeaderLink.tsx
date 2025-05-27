import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const HeaderLink = ({ name }: { name: string }) => {
	const [hover, setHover] = useState(false);
	const pathname = usePathname();

	return (
		<div
			onMouseOver={() => setHover(true)}
			onMouseOut={() => setHover(false)}
			className={`relative
				pathname === "/" ? "text-blue-" : ""
			text-lg outline-none`}
		>
			<Link href={`/${name === "Home" ? "/" : name.toLowerCase()}`}>{name}</Link>
			<motion.div
				initial={false}
				animate={{ width: hover ? "100%" : "0%" }}
				transition={{ duration: 0.5 }}
				className={`absolute bg-current 
                        
                        h-1 rounded-lg bottom-0 left-0`}
			/>
		</div>
	);
};

export default HeaderLink;
