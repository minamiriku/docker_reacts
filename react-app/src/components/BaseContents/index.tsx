import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

type LayoutType = {
  title: string;
  children: React.ReactNode;
};

const BaseContents: React.FC<LayoutType> = ({ title, children }) => {
  return (
    <Box>
      <Typography variant="h2" noWrap>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default BaseContents;
