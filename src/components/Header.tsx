import { AppBar, Box, Container, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const Header = () => {
  return (
    <AppBar>
      <Container maxWidth='xl'>
        <Box
          display='flex'
          flexDirection='row'
          alignItems='center'
          justifyContent='space-between'
          padding='16px 0'
        >
          <Link
            component={RouterLink}
            to='/'
            fontSize='36px'
            fontWeight='700'
            color='#000'
            underline='none'
            lineHeight='1'
          >
            AIgineer
          </Link>
          <Typography variant='body1' textAlign='right' maxWidth='295px'>
            генератор поздравлений от ИИ на день рождения и не только
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
};
