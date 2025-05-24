import Image from "next/image";
import Header from "../components/navigation/Header";
import { FaCompass } from "react-icons/fa6";

export default function Tours() {
	return (
		<>
			<div className="relative">
				<Header />
			</div>
			<div className="relative w-screen h-[350px]">
				<Image src={"/banner.jpg"} fill alt="Banner of yachts" />
                        <div className="absolute bottom-0 left-0 w-screen h-[100px]">

                        <Image src={"bottom_wave_devider.svg"} fill alt="Wave divider" className="absolute" />
                        </div>
			</div>
			{/* Tours */}
			<section className="flex w-full">
				<div className="flex flex-col p-14 w-full">
					<h2 className="flex items-center gap-3 text-3xl font-bold text-navy tracking-wide border-b-2 p-2 w-1/4 border-navy">
						{" "}
						<FaCompass className="size-10" /> Our Tours
					</h2>
					<h3 className="py-2 pt-5 text-lg tracking-wider font-semibold">
						We Offer Something For Everyone
					</h3>
					<p className="max-w-xl text-justify">
						Our tour offers wildlife, scenery and historical landmarks. Throughout the
						tour our well informed guides will provide commentary about the local
						wildlife, history of the area, castles and other landmarks.
					</p>
				</div>
			</section>
		</>
	);
}
