import React from 'react';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t } = useTranslation();

  return <h1>{t('HOME.TITLE')}</h1>;
}

export default HomePage;
