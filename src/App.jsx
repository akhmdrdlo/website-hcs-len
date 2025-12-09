import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Internal from './pages/Internal';
import PublicExternalServices from './pages/PublicExternalServices';
import PublicInternalServices from './pages/PublicInternalServices';
// import External from './pages/External'; // No longer used in main layout
import FAQ from './pages/FAQ';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public External Services Route - Standalone (No Sidebar) */}
        <Route path="/external" element={<PublicExternalServices />} />

        {/* Public Internal Services Route - Standalone (No Sidebar) */}
        <Route path="/internal-public" element={<PublicInternalServices />} />

        {/* Dashboard and Internal Routes - With Sidebar */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/internal" element={<Internal />} />
                <Route path="/faq" element={<FAQ />} />
              </Routes>
              <Chatbot />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
