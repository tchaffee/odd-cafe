import '../fonts/fonts-shared.css';
import './global.css';

import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';

Wordpress2016.overrideThemeStyles = () => ({
  h1: {
    fontFamily: ["Oswald", "sans-serif"].join(","),
  },
  a: {
    color: 'var(--textLink)',
    fontFamily: 'Oswald'
  },
  hr: {
    background: 'var(--hr)',
  },
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  // These two are for gatsby-remark-autolink-headers:
  'a.anchor': {
    boxShadow: 'none',
  },
  'a.anchor svg[aria-hidden="true"]': {
    stroke: 'var(--textLink)',
  },
  'p code': {
    fontSize: '1rem',
  },
  // TODO: why tho
  'h1 code, h2 code, h3 code, h4 code, h5 code, h6 code': {
    fontSize: 'inherit',
  },
  'li code': {
    fontSize: '1rem',
  },
  blockquote: {
    color: 'inherit',
    borderLeftColor: 'inherit',
    opacity: '0.8',
  },
  'blockquote.translation': {
    fontSize: '1em',
  },
});

// delete Wordpress2016.googleFonts;
Wordpress2016.googleFonts = [
  {
    name: "Pacifico",
    styles: ["400", "400i", "700", "700i", "900", "900i"],
  },
  {
    name: "Oswald",
    styles: ["400", "400i", "700", "700i", "900", "900i"],
  },
  {
    name: "Ubuntu",
    styles: ["400", "400i", "700", "700i", "900", "900i"],
  }
];

Wordpress2016.headerFontFamily = ["Ubuntu", "sans"];
Wordpress2016.bodyFontFamily = ["Ubuntu", "sans"];



const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
