import {
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
  Skeleton,
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
import { useStore } from '../store';
import { CopyIcon } from '../icons';

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

  const content = useStore((store) => store.content);
  const isLoading = useStore((store) => store.isLoading);
  const currentService = services[0]?.id || '';

  const { handleSubmit, control, setValue, getValues } =
    useForm<CongratulationForm>();

  useEffect(() => {
    if (!styles.length || !celebrations.length || !tones.length) {
      return;
    }

    setValue('toneId', tones[0].id);
    setValue('celebrationId', celebrations[0].id);
    setValue('styleId', styles[0].id);
  }, [celebrations, tones, styles, setValue]);

  const onSubmit = (data: CongratulationForm) => {
    const postPromptBody = {
      additionalWishes: data.content,
      celebrationId: data.celebrationId,
      toneId: data.toneId,
      styleId: data.styleId,
      receiverName: data.name,
      serviceId: currentService,
    };

    postPrompt(postPromptBody);
  };

  const onGenerateAgainClick = () => {
    onSubmit(getValues());
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <>
      <Container maxWidth='xl'>
        <Box paddingY={3}>
          <Typography variant='gradient' marginBottom='24px'>
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
                  {isLoading ? (
                    <>
                      <Skeleton variant='text' animation='wave' width='90%' />
                      <Skeleton variant='text' animation='wave' width='100%' />
                      <Skeleton variant='text' animation='wave' width='80%' />
                      <Skeleton variant='text' animation='wave' width='95%' />
                    </>
                  ) : (
                    content
                  )}
                </Typography>

                <Box
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  gap='24px'
                >
                  <Button
                    variant='outlined'
                    onClick={handleCopyClick}
                    startIcon={<CopyIcon />}
                  >
                    Скопировать текст
                  </Button>
                  <Button variant='contained' onClick={onGenerateAgainClick}>
                    Сгенерировать снова
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
