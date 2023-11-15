import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ProductPage from './pages/Product/ProductPage';
import AdminPage from './pages/Admin/AdminPage';
import { Path } from './enums/Path';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import enTranslation from './i18n/en.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  return (
    <div className="background-whitesmoke h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path={Path.PRODUCTS} element={<ProductPage />} />
            <Route path={Path.ADMIN_PRODUCTS} element={<AdminPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
