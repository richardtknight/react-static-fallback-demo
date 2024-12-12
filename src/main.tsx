import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import { createRoot, hydrateRoot } from 'react-dom/client';

const rootElement = document.getElementById('root') as HTMLElement

if (rootElement.hasChildNodes()) {
  console.log('App: Hydrate');
  hydrateRoot(
      rootElement,
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>,
  );
} else {
  console.log('App: Render');
  createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  )
}