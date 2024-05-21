import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import IndexRoutes from '../routes';

function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <IndexRoutes />
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
