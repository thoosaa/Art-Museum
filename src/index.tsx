//import App from './App';
import '@assets/styles/index.scss';

import { App } from '@components/App/App';
import { PaginationProvider } from '@context/PageContext';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PaginationProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </PaginationProvider>
  </StrictMode>,
);
