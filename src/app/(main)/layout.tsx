import { type ReactNode } from "react";
import { Footer } from "@/ui/components/Footer";
import { Header } from "@/ui/components/Header";

export const metadata = {
	title: "FACIB SpA - Fabbrica di abbigliamento Italiana",
	description: "Produzione di abbigliamento sportivo personalizzato per squadre, eventi e aziende.",
};

export default function RootLayout(props: { children: ReactNode }) {
	return (
		<>
			<Header />
			<div className="flex min-h-[calc(100dvh-64px)] flex-col">
				<main className="flex-1">{props.children}</main>
				<Footer />
			</div>
		</>
	);
}
