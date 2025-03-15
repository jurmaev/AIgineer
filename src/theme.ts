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
  },
});
