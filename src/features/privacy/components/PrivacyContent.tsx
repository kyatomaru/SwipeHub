import ReactMarkdown from "react-markdown";
import { markdownComponents } from "@/components/markdown/markdownComponents";
import { PrivacyContent as PrivacyContentText } from "./Privacy";

export default function PrivacyContent() {
  return (
    <ReactMarkdown components={markdownComponents}>{PrivacyContentText}</ReactMarkdown>
  );
}

