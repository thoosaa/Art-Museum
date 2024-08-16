import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import App from './App';
import '@assets/styles/index.scss';
import { HashRouter } from 'react-router-dom';
import { PaginationProvider } from '@context/PageContext';
import { App } from '@components/App/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PaginationProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </PaginationProvider>
  </StrictMode>,
);
