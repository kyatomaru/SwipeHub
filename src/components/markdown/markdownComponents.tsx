// markdownComponents.tsx
// -------------------------------------------------
import type { Components } from "react-markdown";

export const markdownComponents: Components = {
  /* 見出し -------------------------------------------------- */
  h1: ({ ...props }) => <h1 className="text-3xl font-bold py-4" {...props} />,
  h2: ({ ...props }) => (
    <h2
      className="text-lg font-semibold mt-12 mb-1 pt-8 border-t border-gray-100"
      {...props}
    />
  ),
  h3: ({ ...props }) => (
    <h3 className="text-md font-semibold mt-8 mb-1 text-sm" {...props} />
  ),

  /* 本文・強調 ------------------------------------------------ */
  p: ({ ...props }) => (
    <p
      className="leading-7 tracking-wide mb-1 text-gray-800 text-sm"
      {...props}
    />
  ),
  strong: ({ ...props }) => (
    <strong className="font-semibold text-gray-900" {...props} />
  ),

  /* 箇条書き -------------------------------------------------- */
  ul: ({ ...props }) => (
    <ul className="list-disc ml-6 space-y-1 mb-1 text-sm" {...props} />
  ),
  ol: ({ ...props }) => (
    <ol className="list-decimal ml-6 space-y-1 mb-1 text-sm" {...props} />
  ),
  li: ({ ...props }) => (
    <li
      className="leading-7 tracking-wide mb-1 text-gray-800 list-disc text-sm"
      {...props}
    />
  ),

  /* 引用・区切り線 ------------------------------------------ */
  blockquote: ({ ...props }) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-1"
      {...props}
    />
  ),
  hr: () => <div className="border-t border-gray-300 my-1" />,

  /* リンク ---------------------------------------------------- */
  a: ({ href = "", ...props }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline"
      {...props}
    />
  ),

  /* テーブル（念のため） ------------------------------------- */
  table: ({ ...props }) => (
    <div className="overflow-x-auto my-1">
      <table className="w-full text-left" {...props} />
    </div>
  ),

  th: ({ ...props }) => (
    <th className="border-gray-800 border p-2" {...props} />
  ),
  td: ({ ...props }) => (
    <td className="border-gray-800 border p-2" {...props} />
  ),
};
