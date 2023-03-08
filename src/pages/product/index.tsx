import React from 'react';

import { Page } from 'src/types/next.types';

import Breadcrumbs from '@components/Breadcrumbs';
import Section from '@containers/Layout/Section';
import Product from '@containers/Product';

import styles from './styles.module.scss';

const ProductPage: Page = () => {
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
      <Product />
    </Section>
  );
};

export default ProductPage;
