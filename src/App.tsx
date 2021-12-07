import React from 'react';
import Provider from './context/provider';
import Home from './pages/Home';
import FindByZip from './pages/FindByZip';
import FindByAddress from './pages/FindByAddress';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/findByZip" element={<FindByZip />} />
          <Route path="/findByAddress" element={<FindByAddress />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
