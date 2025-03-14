import { AppBar, Box, Container, Typography } from '@mui/material';

export const Header = () => {
  return (
    <AppBar position='static'>
      <Container>
        <Box
          display='flex'
          flexDirection='row'
          alignItems='center'
          justifyContent='space-between'
          padding='16px 0'
        >
          <Typography>AIgineer</Typography>
          <Typography maxWidth='295px'>
            генератор поздравлений от ИИ на день рождения и не только
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
};
