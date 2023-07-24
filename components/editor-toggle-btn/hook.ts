import { useEditorStateStore } from "@/store";

export const useEditorToggleBtn = () => {
	const { updateCurrentState, currentState } = useEditorStateStore();

	const toggleState = () => {
		updateCurrentState(currentState === "editor" ? "preview" : "editor");
	};

	return {
		toggleState,
		currentState,
	};
};
