"use client";

import { useEditorStateStore } from "@/store";
import { Editor } from "../editor";
import { MDPreview } from "../md-preview";

const BodySection = () => {
	const { currentState } = useEditorStateStore();

	return (
		<div className="flex-1 w-full mt-4 flex flex-col">
			{currentState === "editor" ? <Editor /> : <MDPreview />}
		</div>
	);
};

export default BodySection;
