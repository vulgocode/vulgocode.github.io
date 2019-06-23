import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import image from '../../images/vulgocode-hero.png';

const SEO = () => {
  const {
    site: {
      siteMetadata: {
        title, description, author, siteUrl, lang,
      },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            lang
          }
        }
      }
    `,
  );

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="vulgocode" content="Vulgocode agencia web digital" />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta property="og:locale" content={lang} />
      <meta property="og:site_name" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={description} />
    </Helmet>
  );
};

export default SEO;
