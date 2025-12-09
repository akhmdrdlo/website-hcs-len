import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PublicExternalServices from './pages/PublicExternalServices';
import PublicInternalServices from './pages/PublicInternalServices';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Route: External Services (Home) */}
        <Route path="/" element={<PublicExternalServices />} />

        {/* Explicit Route for External */}
        <Route path="/external" element={<Navigate to="/" replace />} />

        {/* Internal Services Route */}
        <Route path="/internal" element={<PublicInternalServices />} />
        <Route path="/internal-public" element={<Navigate to="/internal" replace />} />

        {/* Catch all - Redirect to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
