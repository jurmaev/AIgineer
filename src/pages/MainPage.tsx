import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function MainPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/congratulations');
  };

  return (
    <>
      <Container>
        <Card>
          <CardContent>
            <Typography>Генератор поздравлений</Typography>
          </CardContent>
          <CardActions>
            <Button onClick={handleClick}>Перейти!</Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
}
