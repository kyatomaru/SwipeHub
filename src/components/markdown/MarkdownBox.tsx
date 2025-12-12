import Markdown from "react-markdown";
import { markdownComponents } from "./markdownComponents";
import remarkGfm from "remark-gfm";

type MarkdownProps = {
  content: string;
};

export const MarkdownBox = ({ content }: MarkdownProps) => {
  return (
    <article>
      <Markdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {content}
      </Markdown>
    </article>
  );
};
