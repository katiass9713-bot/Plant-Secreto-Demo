import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Auth from './pages/Auth';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Toaster theme="dark" position="top-center" />
    </BrowserRouter>
  );
}
