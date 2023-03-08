import React, { memo } from 'react';

import Link from 'next/link';
import cn from 'classnames';

import { SECTIONS } from '@constants/sections.constants';
import Section from '@containers/Layout/Section';

import styles from './styles.module.scss';

const Categories = () => (
  <Section id={SECTIONS.CATEGORIES} className={styles.wrapper}>
    <div className={styles.wrap}>
      <Link href="">
        <div className={cn(styles.item, styles.vertical)}>
          <h4 className={styles.description}>Памятники</h4>
          <h3 className={styles.title}>Вертикальные</h3>
        </div>
      </Link>

      <Link href="">
        <div className={cn(styles.item, styles.horizontal)}>
          <h4 className={styles.description}>Памятники</h4>
          <h3 className={styles.title}>Горизонтальные</h3>
        </div>
      </Link>

      <Link href="">
        <div className={cn(styles.item, styles.complex)}>
          <h4 className={styles.description}>Гранитные</h4>
          <h3 className={styles.title}>Комплексы</h3>
        </div>
      </Link>

      <Link href="">
        <div className={cn(styles.item, styles.fences)}>
          <h4 className={styles.description}>Гранитные </h4>
          <h3 className={styles.title}>Ограды</h3>
        </div>
      </Link>

      <Link href="">
        <div className={cn(styles.item, styles.landscaping)}>
          <h4 className={styles.description}>Комплексное</h4>
          <h3 className={styles.title}>Благоустройство</h3>
        </div>
      </Link>

    </div>
  </Section>
);

export default memo(Categories);
