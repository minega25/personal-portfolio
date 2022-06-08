import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: [
    'Roboto Mono',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Spectral', 'serif'],
  googleFonts: [
    {
      name: 'Spectral',
      styles: ['400', '500', '600', '700', '800'],
    },
    {
      name: 'Roboto Mono',
      styles: ['400', '500', '600', '700', '800'],
    },
  ],
});

export default typography;
