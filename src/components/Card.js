import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import {
  Box,
  // Button,
  Card,
  // CardActions,
  CardContent,
  Divider,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

const useStyles = makeStyles(() => ({
  cardActions: {
    justifyContent: "flex-end",
  },
  card: {
    background: "transparent",
  },
  cardContent: {
    padding: 12,
  },
}));

export default ({ featuredImage, title, postDate, excerpt, url }) => {
  const classes = useStyles();

  return (
    <Card elevation={0} classes={{ root: classes.card }}>
      <Link to={url} style={{ textDecoration: "none" }}>
        <Img
          fluid={featuredImage.childImageSharp.fluid}
          style={{ borderRadius: 2 }}
        />
        <CardContent classes={{ root: classes.cardContent }}>
          <Typography
            gutterBottom
            variant="h6"
            style={{
              color: "black",
              marginBottom: 0,
              fontWeight: 600,
              fontFamily: "Nanum Gothic",
              lineHeight: 1.25,
            }}
          >
            {title}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {moment(postDate).format("LL")}
          </Typography>
          <Box marginY={1}>
            <Divider light />
          </Box>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            component="p"
            style={{ fontFamily: "Nanum Gothic" }}
          >
            {excerpt}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};
