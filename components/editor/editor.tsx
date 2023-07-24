"use client";

import { useMDTextStore } from "@/store";

const Editor = () => {
	const { md, setMd } = useMDTextStore();

	return (
		<textarea
			className="w-full flex-grow resize-none rounded-md border-2 border-primary-dark p-3 font-mono focus:outline-none text-xl tracking-wider"
			value={md}
			onChange={(e) => setMd(e.target.value)}
		/>
	);
};

export default Editor;
