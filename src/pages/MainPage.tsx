import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FreeIcon, LightBulbIcon, LikeIcon } from '../icons';
import { Helmet } from 'react-helmet';

export function MainPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/birthdai');
  };

  return (
    <>
      <Helmet>
        <title>AIgineer</title>
        <meta
          name='description'
          content='Ваш универсальный помощник с AI-инструментами для жизни! Упрощайте задачи, вдохновляйтесь и достигайте большего с помощью искусственного интеллекта.'
        />
      </Helmet>
      <Container>
        <Box margin='0 auto' paddingY={3} maxWidth='768px'>
          <Stack gap={3} alignItems='center' marginBottom='40px'>
            <Typography variant='gradient'>
              Ваш верный помощник в создании уникальных поздравлений
            </Typography>
            <Typography variant='body1'>
              Теперь не придется тратить кучу времени на придумывание
              поздравлений, ведь ИИ сделает это вместо вас буквально за пару
              кликов
            </Typography>
            <Button variant='contained' onClick={handleClick}>
              Сгенерировать поздравление
            </Button>
          </Stack>
          <Box display='flex' alignItems='center' flexDirection='column'>
            <Typography variant='gradient' marginBottom='40px'>
              Почему выбирают наш генератор?
            </Typography>
            <Stack gap={1}>
              <Stack direction='row' gap='12px' alignItems='center'>
                <LikeIcon />
                <Typography variant='subtitle1'>Быстро и удобно</Typography>
              </Stack>
              <Stack direction='row' gap='12px' alignItems='center'>
                <LightBulbIcon />
                <Typography variant='subtitle1'>
                  Уникальные поздравления
                </Typography>
              </Stack>
              <Stack direction='row' gap='12px' alignItems='center'>
                <FreeIcon />
                <Typography variant='subtitle1'>
                  Бесплатно и без регистрации
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Container>
    </>
  );
}
