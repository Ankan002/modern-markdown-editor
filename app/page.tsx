import { BodySection, EditorToggleButton } from "@/components";

export default function Home() {
	return (
		<main className="w-full min-h-screen flex flex-col bg-primary-light font-quicksand p-2">
			<div className="w-full flex justify-between items-center">
				<h1 className="text-3xl text-primary-dark tracking-widest font-bold">
					MDX
				</h1>

				<EditorToggleButton />
			</div>

			<BodySection />
		</main>
	);
}
