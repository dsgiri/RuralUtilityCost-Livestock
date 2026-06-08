import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppLayout } from './components/layout/AppLayout';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Legal } from './pages/Legal';
import { License } from './pages/License';
import { ToolDetail } from './pages/ToolDetail';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plan" element={<Home />} />
            <Route path="/forecast" element={<Home />} />
            <Route path="/what-if" element={<Home />} />
            <Route path="/predictor" element={<Home />} />
            
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/license" element={<License />} />
            
            <Route path="/tools/:toolId" element={<ToolDetail />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </HelmetProvider>
  );
}
