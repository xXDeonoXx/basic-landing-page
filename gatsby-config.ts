import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `basic-landing-page`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: ['gatsby-plugin-styled-components', 'gatsby-plugin-postcss'],
};

export default config;
