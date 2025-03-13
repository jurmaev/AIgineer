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
import { useForm } from 'react-hook-form';
import { useStore } from '../store';

type CongratulationForm = {
  styleId: string;
  celebrationId: string;
  toneId: string;
  name: string;
  content: string;
};

export function CongratulationsPage() {
  const { register, handleSubmit } = useForm<CongratulationForm>();

  const styles = useGetStyles();
  const celebrations = useGetCelebrations();
  const tones = useGetTones();
  const postPrompt = usePostPrompt();

  const content = useStore((store) => store.content);

  console.log(content, styles, celebrations, tones);

  const onSubmit = (data: CongratulationForm) => {
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
              <FormControl size='small'>
                <Typography>Повод</Typography>
                <Select id='celebrationType' {...register('celebrationId')}>
                  <MenuItem value={1}>День рождения</MenuItem>
                  <MenuItem value={2}>Новый год</MenuItem>
                </Select>
              </FormControl>
              <FormControl size='small'>
                <Typography>Тон</Typography>
                <Select id='toneType' {...register('toneId')}>
                  <MenuItem value={1}>Теплое</MenuItem>
                  <MenuItem value={2}>Веселое</MenuItem>
                </Select>
              </FormControl>
              <FormControl size='small'>
                <Typography>Стиль</Typography>
                <Select id='styleType' {...register('styleId')}>
                  <MenuItem value={1}>Короткое</MenuItem>
                  <MenuItem value={2}>Лаконичное</MenuItem>
                </Select>
              </FormControl>
              <FormControl size='small'>
                <Typography>Имя получателя</Typography>
                <TextField size='small' {...register('name')} />
              </FormControl>
              <FormControl size='small'>
                <Typography>Дополнительные пожелания</Typography>
                <TextField multiline size='small' {...register('content')} />
              </FormControl>
              <Button type='submit'>Сгенерировать!</Button>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
