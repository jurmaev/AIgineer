import { AppBar, Box, Container, Typography } from '@mui/material';

export const Header = () => {
  return (
    <AppBar>
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
          <Typography variant='body1' textAlign='right' maxWidth='295px'>
            генератор поздравлений от ИИ на день рождения и не только
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
};
