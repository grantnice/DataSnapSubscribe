import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PricingPage from './components/PricingPage';
import PrivacyPolicy from './components/PrivacyPolicy';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PricingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}