"use client";
import Image from "next/image";
import Link from "next/link";
import HeaderLink from "./HeaderLink";
import { usePathname } from "next/navigation";

const Header = () => {

      const pathname = usePathname()

	return (
		<header className={`absolute text-white p-6 w-full z-40`}>
			<nav className="max-w-6xl mx-auto flex justify-between items-center">
				{/* Logo */}
				<Image
					src="/logo.png"
					alt="Ballachulish Boat Tours"
					width={150}
					height={50}
				/>

				{/* Navigation Links */}
				<div className="relative flex gap-16">
					<HeaderLink name="Home" />
					<HeaderLink name="Tours" />
					<HeaderLink name="About" />
					<HeaderLink name="Contact" />
				</div>

				{/* Book Now Button */}
				<Link
					href="/book"
					className="bg-navy text-white px-6 py-3 rounded-full hover:bg-transparent transition duration-300 border-2 border-transparent hover:border-navy"
				>
					Book Now
				</Link>
			</nav>
		</header>
	);
};

export default Header;
