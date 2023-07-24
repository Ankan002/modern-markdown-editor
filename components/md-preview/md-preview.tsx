import { useMDTextStore } from "@/store";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MDPreview = () => {
	const { md } = useMDTextStore();

	return (
		<div className="flex-grow w-full overflow-y-scroll p-3 border-2 border-primary-dark bg-primary-light rounded-lg">
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				className="prose prose-img:block leading-tight"
			>
				{md}
			</ReactMarkdown>
		</div>
	);
};

export default MDPreview;
