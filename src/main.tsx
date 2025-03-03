import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { MainPage } from './pages/MainPage.tsx';
import { CongratulationsPage } from './pages/CongratulationsPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/congratulations' element={<CongratulationsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
