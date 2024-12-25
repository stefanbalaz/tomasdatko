import React from "react";

// Utility function to handle text with different types like bold or italic
const TextRenderer = ({ content }: any) => {
  switch (content.type) {
    case "bold":
      return <strong>{content.text}</strong>;
    case "italic":
      return <em>{content.text}</em>;
    case "textLink":
      return (
        <a
          href={content.href}
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {content.text}
        </a>
      );
    case "text":
    default:
      return <span>{content.text}</span>;
  }
};

export default TextRenderer;
