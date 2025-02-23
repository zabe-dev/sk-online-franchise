"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { FaBars } from "react-icons/fa6";
import {
	Sheet,
	SheetTrigger,
	SheetTitle,
	SheetContent,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navLinks = [
	{ href: "/#about", label: "About", target: "_self" },
	{ href: "/#faqs", label: "FAQs", target: "_self" },
	{ href: "/blog", label: "Blog", target: "_self" },
	{ href: "/#contact", label: "Contact", target: "_self" },
	{ href: process.env.NEXT_PUBLIC_SHOPLINK, label: "Order", target: "_blank" },
];

export default function Menu() {
	const pathName = usePathname();

	return (
		<>
			<nav className="hidden md:flex gap-4 md:gap-8 items-center font-medium">
				{navLinks.map((link) => (
					<Link
						key={link.href}
						href={link.href || "#"}
						target={link.target}
						className={cn(
							"cursor-pointer hover:text-red-900",
							pathName === link.href ? "text-red-900" : "text-black"
						)}
					>
						{link.label}
					</Link>
				))}
			</nav>

			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="md:hidden">
						<FaBars className="h-5 w-5" />
						<span className="sr-only">Toggle menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="right" className="border-r p-0">
					<nav className="flex flex-col gap-4 p-6 h-full items-center justify-center">
						<SheetTitle>Menu</SheetTitle>
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href || "#"}
								target={link.target}
								className={cn(
									"cursor-pointer hover:text-red-900  font-bold text-center py-4",
									pathName === link.href ? "text-red-900" : "text-black"
								)}
							>
								{link.label}
							</Link>
						))}
					</nav>
				</SheetContent>
			</Sheet>
		</>
	);
}
