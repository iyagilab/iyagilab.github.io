import React from "react";
import path from "path";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import theme from "../style/theme";
import { useHasScroll } from "has-scroll-hook";
import { Helmet } from "react-helmet";
import IMAGE_LINK from "../images/favicon.png";

const Posts = ({ posts, pathPrefix }) => {
  return (
    <Grid container spacing={3}>
      {posts.map(
        ({
          node: {
            excerpt,
            fileAbsolutePath,
            frontmatter: { id, title, featuredImage },
          },
        }) => {
          const postDate = path
            .basename(fileAbsolutePath)
            .split("-")
            .splice(0, 3)
            .join("-");
          return (
            <Grid item xs={12} sm={4} key={id}>
              <Card
                featuredImage={featuredImage}
                title={title}
                url={`/${pathPrefix}/${id}`}
                postDate={postDate}
                excerpt={excerpt}
              />
            </Grid>
          );
        }
      )}
    </Grid>
  );
};

export default function HomeTemplate({
  data: {
    site: {
      siteMetadata: {
        title,
        description,
        templates: {
          posts: { pathPrefix },
        },
      },
    },
    allMdx: { edges: posts },
  },
}) {
  /* Get the vertical scrollbar offset as a boolean value. */
  const hasScroll = useHasScroll();

  return (
    <>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={IMAGE_LINK} />
        {/* <meta property="og:url" content={url} /> */}
        <meta property="og:site_name" content={title} />
        <meta
          name="google-site-verification"
          content="ZM_W0dIVoR-3EMAyZaZVzKqZfH9o2UqOS43-D7oYJ1g"
        />
      </Helmet>
      <Layout elevateAppBar={hasScroll}>
        <Box display="flex" flexDirection="column">
          <Box
            textAlign="center"
            paddingTop={4}
            paddingBottom={4}
            paddingX={8}
            style={{
              backgroundColor: theme.palette.common.white,
              color: theme.palette.text.secondary,
            }}
          >
            {/*           
          clipPath: "polygon(0 0, 100% 0, 70% 100%, 30% 100%)",
            WebkitClipPath: "polygon(0 0, 100% 0, 70% 100%, 30% 100%)", */}
            <Box marginBottom={4}>
              <Typography
                color="inherit"
                variant="h2"
                style={{
                  fontWeight: "bold",
                  fontFamily: "Nanum Gothic",
                  marginBottom: 4,
                }}
              >
                {title}
              </Typography>
              <Typography color="inherit" variant="body1">
                {description}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box flexGrow={1} marginX="auto" width="100%" maxWidth={960}>
          <Box padding={2}>
            <Posts posts={posts} pathPrefix={pathPrefix} />
            {posts.length > 1 && (
              <Box
                display="flex"
                justifyContent="flex-end"
                padding={1}
                marginTop={1}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  to={`/${pathPrefix}/page/1`}
                >
                  View All
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Layout>
    </>
  );
}

export const pageQuery = graphql`
  query ($limit: Int!) {
    site {
      siteMetadata {
        title
        description
        templates {
          posts {
            pathPrefix
          }
        }
      }
    }
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/posts/" } }
      sort: { order: DESC, fields: [fileAbsolutePath] }
      limit: $limit
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          fileAbsolutePath
          frontmatter {
            id
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 720, maxHeight: 480) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
