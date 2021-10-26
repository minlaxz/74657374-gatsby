module.exports = {
  siteMetadata: {
    siteUrl: "https://74657374gatsbymain.gatsbyjs.io/",
    title: "74657374-gatsby",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
};
