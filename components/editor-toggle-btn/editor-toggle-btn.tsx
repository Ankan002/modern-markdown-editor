"use client";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useEditorToggleBtn } from "./hook";

const EditorToggleButton = () => {
	const { toggleState, currentState } = useEditorToggleBtn();

	return (
		<button
			className="p-2 border-2 border-primary-dark rounded-md"
			onClick={toggleState}
		>
			{currentState === "editor" ? (
				<AiFillEye size={25} />
			) : (
				<AiFillEyeInvisible size={25} />
			)}
		</button>
	);
};

export default EditorToggleButton;
