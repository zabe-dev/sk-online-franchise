import Container from "@/components/container";
import Header from "@/components/header";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			<main>
				<Container>{children}</Container>
			</main>
		</>
	);
}
