import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Modern Markdown",
	description: "Its the modern markdown",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
