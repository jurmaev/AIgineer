import { Box, Container, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const NotFoundPage = () => (
  <Container>
    <Box padding={4} display='flex' flexDirection='column' alignItems='center'>
      <Typography variant='gradient' marginBottom={2}>
        Страница не найдена
      </Typography>
      <Typography variant='subtitle1'>
        Вернуться на{' '}
        <Link component={RouterLink} to='/' fontWeight='700'>
          Главную
        </Link>
      </Typography>
    </Box>
  </Container>
);
