import "@/styles/globals.css";
import { Quicksand } from "next/font/google";

export const quicksand = Quicksand({
	display: "swap",
	variable: "--font-quicksand",
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${quicksand.variable} relative antialiased`}>
				{children}
			</body>
		</html>
	);
}
