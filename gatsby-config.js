module.exports = {
  siteMetadata: {
    title: 'Vulgocode Agência Web Digital',
    description: 'Agencia web de criação de sites, Landing pages e apps android e ios para pequenas empresa e profissional individuais a fim de garantir a eficiência dos processos de negócios de seus clientes criando ferramentas  tecnológicas, soluções e serviços de alta performance que se traduzem em qualidade, parceria.',
    author: '@alexandrer_stos',
    siteUrl: 'https://vulgocode.github.io',
    lang: 'pt-BR',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/.*\.svg/,
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-142577313-1',
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Vulgocode agencia web digital',
        short_name: 'vulgocode',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon-vulgocode.png',
      },
    },
  ],
};
