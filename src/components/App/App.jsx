import { Routes, Route } from 'react-router-dom';
// import { lazy, Suspense } from 'react';
import HomePage from '../../pages/HomePage';
import HowToUsePage from '../../pages/HowToUsePage';
import Contacts from '../../pages/Contacts'
import NotFoundPage from '../../pages/NotFoundPage';
import Layout from '../Layout';

import './App.scss';

// const HomePage = lazy(() => import('../../pages/HomePage'));
// const HowToUsePage = lazy(() => import('../../pages/HowToUsePage'));
// const Contacts = lazy(() => import('../../pages/Contacts'));
// const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));
// const Layout = lazy(() => import('../Layout'));


function App() {
  return (
    <>
      {/* <Suspense fallback={<h1>Загружаю...</h1>}> */}
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='HowToUse' element={<HowToUsePage />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      {/* </Suspense> */}
    </>
  );
}

export default App;
