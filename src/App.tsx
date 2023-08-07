import './App.css';
import '../assets/styles/fonts.css';
import '../assets/styles/global.css';

import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header.tsx';
import { Layout } from './components/Layout/Layout.tsx';
import { StartGame } from './pages/StartGame/StartGame.tsx';
import { Game } from './pages/game/Game.tsx';

const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route path={'/game'} element={<Game />} />
          <Route path="/" element={<StartGame />} />
          <Route path={'*'} element={<div>404</div>} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
