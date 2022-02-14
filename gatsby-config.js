module.exports = {
  siteMetadata: {
    title: `Data-iYagi`,
    siteUrl: "https://www.iyagilab.com/",
    description: `이야기 연구소의 공공데이터 분석 블로그`,
    components: {
      appbar: {
        position: "sticky",
        links: [
          {
            title: "보라",
            url: "/bora",
          },
          {
            title: "회사",
            url: "/iYagiLab",
          },
        ],
      },
      footer: {
        copyright: "iYagiLab inc.",
        columns: [
          {
            heading: "Column 1",
            links: [
              {
                title: "Link 1",
                url: "#",
              },
              {
                title: "Link 2",
                url: "#",
              },
              {
                title: "Link 3",
                url: "#",
              },
            ],
          },
          {
            heading: "Column 2",
            links: [
              {
                title: "Link A",
                url: "#",
              },
              {
                title: "Link B",
                url: "#",
              },
              {
                title: "Link C",
                url: "#",
              },
            ],
          },
          {
            heading: "Column 3",
            links: [
              {
                title: "Link x",
                url: "#",
              },
              {
                title: "Link y",
                url: "#",
              },
              {
                title: "Link z",
                url: "#",
              },
            ],
          },
        ],
      },
    },
    templates: {
      home: {
        totalPosts: 6,
        template: "home",
      },
      pages: {
        path: "/content/pages/",
        template: "page",
      },
      posts: {
        path: "/content/posts/",
        pathPrefix: "posts",
        template: "post",
        filters: {
          tag: {
            pathPrefixTag: "tag",
            template: "tag",
            totalPosts: 3,
            pagination: {
              template: "resultsTag",
              resultsPerPage: 6,
            },
          },
        },
        pagination: {
          template: "resultsAll",
          resultsPerPage: 6,
        },
      },
    },
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `src/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-posts`,
        path: `src/content/posts`,
      },
    },
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://www.iyagilab.com/",
        stripQueryString: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Data-iYagi",
        short_name: "Data-iYagi",
        start_url: "/",
        background_color: "#FFF",
        theme_color: "#F7A046",
        display: "standalone",
        icon: "src/images/Favicon.ico",
      },
    },
  ],
};
