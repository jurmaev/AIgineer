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
          <Typography fontSize='36px' fontWeight='700' lineHeight='1'>
            AIgineer
          </Typography>
          <Typography
            fontSize='16px'
            fontWeight='450'
            textAlign='right'
            color='#64748B'
            maxWidth='295px'
            lineHeight='1'
          >
            генератор поздравлений от ИИ на день рождения и не только
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
};
