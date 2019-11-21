module.exports = {
  siteMetadata: {
    title: `Sky Lite`,
    siteUrl: `https://yoursite.com`,
    description: `A lightweight GatsbyJS starter base with Material-UI and MDX Markdown support.`,
    components: {
      appbar: {
        position: "sticky",
        links: [
          {
            title: "Doc 1",
            url: "/doc1"
          },
          {
            title: "Doc 2",
            url: "/doc2"
          }
        ]
      },
      layout: {
        googleFonts: "Roboto|Merriweather:300|Work+Sans:800"
      },
      footer: {
        copyright: "yoursite.com",
        columns: [
          {
            heading: "Column 1",
            links: [
              {
                title: "Link 1",
                url: "#"
              },
              {
                title: "Link 2",
                url: "#"
              },
              {
                title: "Link 3",
                url: "#"
              }
            ]
          },
          {
            heading: "Column 2",
            links: [
              {
                title: "Link A",
                url: "#"
              },
              {
                title: "Link B",
                url: "#"
              },
              {
                title: "Link C",
                url: "#"
              }
            ]
          },
          {
            heading: "Column 3",
            links: [
              {
                title: "Link x",
                url: "#"
              },
              {
                title: "Link y",
                url: "#"
              },
              {
                title: "Link z",
                url: "#"
              }
            ]
          }
        ]
      }
    },
    templates: {
      home: {
        numberOfPosts: 5,
        template: "home"
      },
      pages: {
        path: "/content/pages/",
        template: "page"
      },
      posts: {
        path: "/content/posts/",
        pathPrefix: "posts",
        template: "post",
        filters: {
          tag: {
            pathPrefix: "tag",
            template: "filterPostByTag",
            numberOfPosts: 5
          }
        }
      }
    }
  },
  plugins: [
    { resolve: `gatsby-plugin-styled-components` },
    { resolve: `gatsby-theme-sky-lite` },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sky Lite`,
        short_name: `SkyLite`,
        start_url: `/`,
        background_color: `#e6ebf1`,
        theme_color: `#1f55ff`,
        display: `standalone`,
        icon: `src/images/favicon.png`
      }
    }
  ]
};
