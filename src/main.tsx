import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import './App.css'
import { ThemeProvider } from 'next-themes'

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
