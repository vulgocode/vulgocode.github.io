import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.6,
  scaleRatio: 2,
  headerFontFamily: ['Roboto', 'sans-serif'],
  bodyFontFamily: ['Monteserrat', 'sans-serif'],
  headerGray: 50,
  headerGrayHue: 'warn',
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['700', '400'],
    },
    {
      name: 'Monteserrat',
      styles: ['400', '700'],
    },
  ],
  overrideStyles: () => ({
    h2: {
      fontSize: '34px',
    },
    h3: {
      fontSize: '22px',
    },
    body: {

    },
  }),
});

export default typography;
