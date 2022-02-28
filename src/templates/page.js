import React from "react";
import { graphql } from "gatsby";
import { makeStyles } from "@material-ui/styles";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout";
import { Box, Typography } from "@material-ui/core";
import { Helmet } from "react-helmet";

const useStyles = makeStyles(() => ({
  article: {
    lineHeight: 1.6,
    fontFamily: "Nanum Gothic",
    fontSize: "1.1rem",
    "& blockquote": {
      borderLeft: "3px solid #303032",
      marginLeft: -16,
      paddingLeft: 13,
      fontStyle: "italic",
    },
  },
}));

export default function PageTemplate({ data }) {
  const classes = useStyles();
  const { mdx } = data;
  const {
    frontmatter: { featuredImage, title },
    body,
  } = mdx;
  return (
    <>
      <Helmet>
        <title>{title}</title>

        {/* <meta name="description" content={body} /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        {/* <meta property="og:description" content={body} /> */}
        <meta property="og:image" content={Img} />
        {/* <meta property="og:url" content={url} /> */}
        <meta property="og:site_name" content={title} />
      </Helmet>
      <Layout>
        <Box flexGrow={1} width="100%" maxWidth={960} marginX="auto">
          <Box padding={2}>
            <Box marginBottom={1}>
              <Typography
                variant="h5"
                style={{
                  fontFamily: "Nanum Gothic",
                  fontWeight: "bold",
                }}
              >
                {title}
              </Typography>
            </Box>
            {featuredImage && (
              <Img
                fluid={featuredImage.childImageSharp.fluid}
                style={{ borderRadius: 2 }}
              />
            )}
            <article className={classes.article}>
              <MDXRenderer>{body}</MDXRenderer>
            </article>
          </Box>
        </Box>
      </Layout>
    </>
  );
}

export const pageQuery = graphql`
  query ($postId: String!) {
    mdx(frontmatter: { id: { eq: $postId } }) {
      body
      frontmatter {
        id
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1280, maxHeight: 480) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
