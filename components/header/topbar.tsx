import Container from "@/components/container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaEnvelope, FaPhone, FaFacebookMessenger } from "react-icons/fa6";

const topbarIcons = [
	{
		icon: FaEnvelope,
		href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
		label: process.env.NEXT_PUBLIC_EMAIL,
	},
	{ icon: FaPhone, href: "#", label: process.env.NEXT_PUBLIC_PHONE_NUMBER },
];

export default function Topbar() {
	return (
		<div className="h-15 sm:h-10 bg-red-900 text-white">
			<Container className="hidden sm:flex items-center">
				<div className="hidden sm:flex items-center justify-between w-full gap-4 lg:justify-start">
					{topbarIcons.map(({ icon: Icon, href, label }) => (
						<Link
							key={href}
							href={href}
							className="flex items-center gap-2 text-sm"
						>
							<Icon />
							<span>{label}</span>
						</Link>
					))}
				</div>
			</Container>
			<div className="sm:hidden flex items-center justify-center mx-auto w-full h-full p-4">
				<Button
					asChild
					className="bg-transparent shadow-none hover:bg-red-800 cursor-pointer"
				>
					<Link
						href={process.env.NEXT_PUBLIC_FB_MESSENGER || "#"}
						className="flex items-center gap-2"
					>
						<FaFacebookMessenger /> Send us a message{" "}
					</Link>
				</Button>
			</div>
		</div>
	);
}
