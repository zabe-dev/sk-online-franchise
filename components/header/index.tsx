import Container from "@/components/container";
import Topbar from "./topbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaFacebookMessenger } from "react-icons/fa6";
import Link from "next/link";
import Menu from "./menu";

export default function Header() {
	return (
		<div className="flex flex-col gap-0 sticky top-0 z-100">
			<Topbar />
			<header className="h-20 bg-[#fff] drop-shadow-xl">
				<Container className="flex justify-between items-center">
					<Image
						src="/images/siomai-king-online-franchise-logo.webp"
						alt="Siomai King Online Franchise Logo"
						width={150}
						height={100}
						priority={true}
					/>
					<Menu />
					<Button
						className="hidden md:flex bg-red-900 rounded-3xl py-6 hover:bg-red-800"
						asChild
					>
						<Link
							href={process.env.NEXT_PUBLIC_FB_MESSENGER || "#"}
							target="_blank"
						>
							<FaFacebookMessenger /> Send us a message
						</Link>
					</Button>
				</Container>
			</header>
		</div>
	);
}
