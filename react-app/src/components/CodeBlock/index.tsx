import { FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/cjs/styles/hljs";

type CodeBlockType = {
  codeString: string;
};

const CodeBlock: FC<CodeBlockType> = ({ codeString }) => {
  return (
    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
