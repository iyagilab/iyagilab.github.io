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

import { Helmet } from "react-helmet";

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
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={featuredImage} />
        {/* <meta property="og:url" content={url} /> */}
        <meta property="og:site_name" content={title} />
        <meta
          name="google-site-verification"
          content="ZM_W0dIVoR-3EMAyZaZVzKqZfH9o2UqOS43-D7oYJ1g"
        />
      </Helmet>
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
    </>
  );
};
