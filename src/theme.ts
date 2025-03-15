import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
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
  },
});
