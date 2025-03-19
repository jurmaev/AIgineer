import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    gradient: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    gradient?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    gradient: true;
  }
}

export const theme = createTheme({
  typography: {
    gradient: {
      fontSize: '36px',
      fontWeight: 700,
      lineHeight: 1,
      background: 'linear-gradient(45deg, #457FDD, #49505B)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      fontFamily: 'Roboto, Arial, sans-serif',
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        position: 'sticky',
        color: 'transparent',
        elevation: 0,
        sx: { backgroundColor: '#fff', borderBottom: '1px solid #d9d9d9' },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          gradient: 'p',
        },
      },
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: 'subtitle1' },
              style: { fontWeight: '500', fontSize: '18px', color: '#475569' },
            },
            { props: { variant: 'body1' }, style: { color: '#64748B' } },
          ],
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: 'contained' },
              style: { borderRadius: '8px', backgroundColor: '#1677FF' },
            },
            {
              props: { variant: 'outlined' },
              style: {
                borderRadius: '8px',
                borderColor: '#D9D9D9',
                color: '#475569',
              },
            },
          ],
        },
      },
    },
    MuiLink: {
      styleOverrides: { root: { fontFamily: 'Roboto, Arial, sans-serif' } },
    },
  },
});
