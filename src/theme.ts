import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiAppBar: { defaultProps: { color: 'transparent', elevation: 0 } },
  },
});
