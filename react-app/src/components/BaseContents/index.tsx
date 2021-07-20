import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    descriptions: {
      marginTop: "20px",
    },
    description: {
      fontSize: "16px",
      lineHeight: "1.5",
    },
  })
);

type LayoutType = {
  title: string;
  children: React.ReactNode;
  descriptions?: Array<string>;
};

const BaseContents: React.FC<LayoutType> = ({
  title,
  children,
  descriptions,
}) => {
  const classes = useStyles();

  return (
    <Box p={5}>
      <Typography variant="h2" noWrap>
        {title}
      </Typography>
      <Box p={2.5}>
        {descriptions ? (
          <Box p={1}>
            <Typography variant="h4" noWrap>
              説明
            </Typography>
            <Typography variant="body1" noWrap className={classes.descriptions}>
              {descriptions.map((desc) => (
                <Typography variant="body2" className={classes.description}>
                  {desc}
                </Typography>
              ))}
            </Typography>
          </Box>
        ) : null}
        {children}
      </Box>
    </Box>
  );
};

export default BaseContents;
