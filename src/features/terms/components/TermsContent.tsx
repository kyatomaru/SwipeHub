import ReactMarkdown from "react-markdown";
import { markdownComponents } from "@/components/markdown/markdownComponents";
import { TermsContent as TermsContentText } from "./Terms";

export default function TermsContent() {
  return (
    <ReactMarkdown components={markdownComponents}>{TermsContentText}</ReactMarkdown>
  );
}

