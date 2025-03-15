import {
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import {
  useGetCelebrations,
  useGetStyles,
  useGetTones,
  usePostPrompt,
} from '../hooks';
import { useForm, Controller } from 'react-hook-form';

type CongratulationForm = {
  styleId: string;
  celebrationId: string;
  toneId: string;
  name: string;
  content: string;
};

export function CongratulationsPage() {
  const styles = useGetStyles();
  const celebrations = useGetCelebrations();
  const tones = useGetTones();
  const postPrompt = usePostPrompt();

  const { handleSubmit, control } = useForm<CongratulationForm>();

  const onSubmit = (data: CongratulationForm) => {
    console.log(data);
    const postPromptBody = {
      mainContent: data.content,
      celebrationId: data.celebrationId,
      toneId: data.toneId,
      styleType: data.styleId,
      receiverName: data.name,
    };

    postPrompt(postPromptBody);
  };

  return (
    <>
      <Container>
        <Typography
          variant='h2'
          fontSize='36px'
          fontWeight='700'
          marginBottom='24px'
          lineHeight='1'
          sx={{
            background: 'linear-gradient(45deg, #457FDD, #49505B)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Идеальное поздравление за пару кликов
        </Typography>

        <Typography
          variant='body1'
          color='#64748B'
          marginBottom='24px'
          maxWidth='680px'
        >
          Просто укажите параметры, такие как тип события, стиль и тон текста, и
          получите готовое поздравление, которое порадует ваших близких, друзей
          или коллег
        </Typography>

        <Box display='flex' alignItems='center' gap='24px'>
          <Box width='100%' component='form' onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={1}>
              <Typography>Сгенерируйте поздравление</Typography>

              <Controller
                name='celebrationId'
                control={control}
                defaultValue={celebrations.length ? celebrations[0].id : ''}
                render={({ field }) => (
                  <FormControl size='small'>
                    <Typography>Повод</Typography>

                    <Select id='celebrationType' {...field}>
                      {celebrations.map((celebration) => (
                        <MenuItem value={celebration.id} key={celebration.id}>
                          {celebration.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />

              <Controller
                name='toneId'
                control={control}
                defaultValue={tones.length ? tones[0].id : ''}
                render={({ field }) => (
                  <FormControl size='small'>
                    <Typography>Тон</Typography>
                    <Select id='toneType' {...field}>
                      {tones.map((tone) => (
                        <MenuItem value={tone.id} key={tone.id}>
                          {tone.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />

              <Controller
                name='styleId'
                control={control}
                defaultValue={tones.length ? tones[0].id : ''}
                render={({ field }) => (
                  <FormControl size='small'>
                    <Typography>Стиль</Typography>
                    <Select id='styleType' {...field}>
                      {styles.map((style) => (
                        <MenuItem value={style.id} key={style.id}>
                          {style.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />

              <Controller
                name='name'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <FormControl size='small'>
                    <Typography>Имя</Typography>
                    <TextField multiline size='small' {...field} />
                  </FormControl>
                )}
              />

              <Controller
                name='content'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <FormControl size='small'>
                    <Typography>Дополнительные пожелания</Typography>
                    <TextField multiline size='small' {...field} />
                  </FormControl>
                )}
              />

              <Button type='submit'>Сгенерировать!</Button>
            </Stack>
          </Box>

          <Box width='100%'>
            <Typography variant='subtitle1'>Сгенерированный текст</Typography>
            <Typography variant='body1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              minima facere corporis et magnam iure possimus necessitatibus
              unde. Aliquam consequatur voluptates laudantium explicabo aut vel
              a veritatis, alias aliquid suscipit.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}
