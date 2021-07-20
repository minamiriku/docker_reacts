import React, { FC } from "react";
import CodeBlock from "components/CodeBlock";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

type ExampleLayoutType = {
  title: string;
  children: React.ReactNode;
  codeString: string;
};

const ExampleLayout: FC<ExampleLayoutType> = ({
  title,
  children,
  codeString,
}) => {
  return (
    <Box p={3}>
      <Typography variant="h5" noWrap>
        {title}
      </Typography>
      {children}
      <CodeBlock codeString={codeString} />
    </Box>
  );
};

export default ExampleLayout;
