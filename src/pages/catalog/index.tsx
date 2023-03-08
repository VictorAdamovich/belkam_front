import React from 'react';

import { Page } from 'src/types/next.types';

import Breadcrumbs from '@components/Breadcrumbs';
import Section from '@containers/Layout/Section';
import Catalog from '@containers/СatalogPage';

import styles from './styles.module.scss';

const CatalogPage: Page = () => {
  const breadcrumbList = [
    { text: 'Главня', href: '/' },
    { text: `Каталог` },
    { text: `Памятники` },
  ];

  return (
    <Section className={styles.wrap}>
      <Breadcrumbs
        data={breadcrumbList}
      />
      <Catalog />
    </Section>
  );
};

export default CatalogPage;
