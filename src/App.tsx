import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from './pages/Home';
import {Favourites} from './pages/Favourites';
import { ROUTES } from './constants/routes';
import { Navigation } from './widgets/Navigation';

const App: React.FC = () => {
  return (
    <Router basename="/">
      <div>
        <Navigation />
        <Routes>
          <Route path={ROUTES.ROOT} element={<Home />} />
          <Route path={ROUTES.FAVOURITES} element={<Favourites />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
