import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  scaleRatio: 2,
  headerFontFamily: ['Roboto', 'sans-serif'],
  bodyFontFamily: ['Monteserrat', 'sans-serif'],
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
});

export default typography;
