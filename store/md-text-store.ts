import { create } from "zustand";

interface MDTextStore {
	md: string;
	setMd: (latestMd: string) => void;
}

export const useMDTextStore = create<MDTextStore>()((set) => ({
	md: "",
	setMd: (latestMd) =>
		set(() => ({
			md: latestMd,
		})),
}));
