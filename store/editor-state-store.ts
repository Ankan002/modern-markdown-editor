import { EditorState } from "@/types";
import { create } from "zustand";

interface EditorStateStore {
	currentState: EditorState;
	updateCurrentState: (newState: EditorState) => void;
}

export const useEditorStateStore = create<EditorStateStore>()((set) => ({
	currentState: "editor",
	updateCurrentState: (newState) =>
		set(() => ({
			currentState: newState,
		})),
}));
