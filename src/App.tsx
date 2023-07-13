import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header.tsx';
import { Layout } from './components/Layout/Layout.tsx';
import { StartGame } from './Pages/StartGame/StartGame.tsx';
import { EndGame } from './Pages/EndGame/EndGame.tsx';

import './assets/styles/fonts.css';
import './assets/styles/global.css';

function App() {
  return <>
    <Header />
    <Layout>
      <Routes>
        <Route path="/start" element={ <StartGame /> } />
        <Route path="/end" element={ <EndGame /> } />
      </Routes>
    </Layout>
  </>;
}

export default App;
