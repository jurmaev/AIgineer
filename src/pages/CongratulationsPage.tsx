import {
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

export function CongratulationsPage() {
  const handleGenerateClick = () => {
    console.log('generate');
  };

  return (
    <>
      <Container>
        <Paper sx={{ padding: 2 }}>
          <Stack gap={1}>
            <Typography>Сгенерируйте поздравление</Typography>
            <FormControl size='small'>
              <Typography>Повод</Typography>
              <Select id='celebrationType'>
                <MenuItem value={1}>День рождения</MenuItem>
                <MenuItem value={2}>Новый год</MenuItem>
              </Select>
            </FormControl>
            <FormControl size='small'>
              <Typography>Тон</Typography>
              <Select id='toneType'>
                <MenuItem value={1}>Теплое</MenuItem>
                <MenuItem value={2}>Веселое</MenuItem>
              </Select>
            </FormControl>
            <FormControl size='small'>
              <Typography>Стиль</Typography>
              <Select id='styleType'>
                <MenuItem value={1}>Короткое</MenuItem>
                <MenuItem value={2}>Лаконичное</MenuItem>
              </Select>
            </FormControl>
            <FormControl size='small'>
              <Typography>Имя получателя</Typography>
              <TextField size='small' />
            </FormControl>
            <FormControl size='small'>
              <Typography>Дополнительные пожелания</Typography>
              <TextField multiline size='small' />
            </FormControl>
            <Button onClick={handleGenerateClick}>Сгенерировать!</Button>
          </Stack>
        </Paper>
      </Container>
    </>
  );
}
