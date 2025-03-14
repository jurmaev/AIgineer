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
        <Paper sx={{ padding: 2 }}>
          <Box component='form' onSubmit={handleSubmit(onSubmit)}>
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
        </Paper>
      </Container>
    </>
  );
}
