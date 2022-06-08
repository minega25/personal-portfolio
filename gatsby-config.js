module.exports = {
  siteMetadata: {
    title: `Patrick S. Minega`,
    description: `Patrick S. Minega's portfolio website.`,
    author: `@patricksminega`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/helpers/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
  ],
};
