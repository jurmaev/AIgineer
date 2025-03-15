import {
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';
import {
  useGetCelebrations,
  useGetServices,
  useGetStyles,
  useGetTones,
  usePostPrompt,
} from '../hooks';

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
  const services = useGetServices();
  const postPrompt = usePostPrompt();

  const currentService = services[0] || '';

  const { handleSubmit, control, setValue } = useForm<CongratulationForm>();

  useEffect(() => {
    if (!styles.length || !celebrations.length || !tones.length) {
      return;
    }

    setValue('toneId', tones[0].id);
    setValue('celebrationId', celebrations[0].id);
    setValue('styleId', styles[0].id);
  }, [celebrations, tones, styles, setValue]);

  const onSubmit = (data: CongratulationForm) => {
    console.log(data);
    const postPromptBody = {
      mainContent: data.content,
      celebrationId: data.celebrationId,
      toneId: data.toneId,
      styleType: data.styleId,
      receiverName: data.name,
      serviceId: currentService,
    };

    postPrompt(postPromptBody);
  };

  return (
    <>
      <Container>
        <Box paddingY={3}>
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

          <Typography variant='body1' marginBottom='24px' maxWidth='680px'>
            Просто укажите параметры, такие как тип события, стиль и тон текста,
            и получите готовое поздравление, которое порадует ваших близких,
            друзей или коллег
          </Typography>

          <Box display='flex' alignItems='stretch' gap='24px'>
            <Box
              width='100%'
              borderRadius={2}
              padding={3}
              bgcolor='#fff'
              component='form'
              onSubmit={handleSubmit(onSubmit)}
            >
              <Stack gap={2}>
                <Controller
                  name='celebrationId'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <FormControl size='small'>
                      <Typography variant='subtitle1' marginBottom='4px'>
                        Повод
                      </Typography>

                      <Select id='celebrationType' {...field}>
                        {celebrations?.map((celebration) => (
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
                  defaultValue=''
                  render={({ field }) => (
                    <FormControl size='small'>
                      <Typography variant='subtitle1' marginBottom='4px'>
                        Тон
                      </Typography>
                      <Select id='toneType' {...field}>
                        {tones?.map((tone) => (
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
                  defaultValue=''
                  render={({ field }) => (
                    <FormControl size='small'>
                      <Typography variant='subtitle1' marginBottom='4px'>
                        Стиль
                      </Typography>
                      <Select id='styleType' {...field}>
                        {styles?.map((style) => (
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
                      <Typography variant='subtitle1' marginBottom='4px'>
                        Имя
                      </Typography>
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
                      <Typography variant='subtitle1' marginBottom='4px'>
                        Дополнительные пожелания
                      </Typography>
                      <TextField multiline size='small' {...field} />
                    </FormControl>
                  )}
                />

                <Box display='flex' width='100%' justifyContent='center'>
                  <Button variant='contained' type='submit'>
                    Сотворить магию
                  </Button>
                </Box>
              </Stack>
            </Box>

            <Box width='100%' bgcolor='#fff' padding={3} borderRadius={2}>
              <Stack gap={2}>
                <Typography variant='subtitle1'>
                  Сгенерированный текст
                </Typography>

                <Typography variant='body1' height='392px'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid minima facere corporis et magnam iure possimus
                  necessitatibus unde. Aliquam consequatur voluptates laudantium
                  explicabo aut vel a veritatis, alias aliquid suscipit.
                </Typography>

                <Box
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  gap='24px'
                >
                  <Button variant='outlined'>Скопировать текст</Button>
                  <Button variant='contained'>Сгенерировать снова</Button>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
