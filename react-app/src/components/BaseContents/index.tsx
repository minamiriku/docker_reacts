import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

type LayoutType = {
  title: string;
  children: React.ReactNode;
};

const BaseContents: React.FC<LayoutType> = ({ title, children }) => {
  return (
    <Box p={5}>
      <Typography variant="h2" noWrap>
        {title}
      </Typography>
      <Box p={2.5}>{children}</Box>
    </Box>
  );
};

export default BaseContents;
