import { ThemeProvider } from '@mui/material/styles';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Header } from './components/Header.tsx';
import { CongratulationsPage } from './pages/CongratulationsPage.tsx';
import { MainPage } from './pages/MainPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';
import { theme } from './theme.ts';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/birthdai' element={<CongratulationsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
