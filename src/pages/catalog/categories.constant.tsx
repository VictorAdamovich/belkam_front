import React from 'react';

import styles from './styles.module.scss';

const howDoIKnowThisIsSafe = (
  <div className={styles.textWrapper}>
    <p>Вертикальные</p>
    <p>Горизонтальные</p>
    <p>Гранитные комплексы</p>
  </div>
);

const howIsW3ADifferent = (
  <div className={styles.textWrapper}>
    <p>Вертикальные</p>
    <p>Горизонтальные</p>
    <p>Гранитные комплексы</p>
  </div>
);

const howExactlyW3AProtectMe = (
  <div className={styles.textWrapper}>
    <p>Вертикальные</p>
    <p>Горизонтальные</p>
    <p>Гранитные комплексы</p>
  </div>
);

export const categoriesData = [
  {
    question: 'Памятники',
    answer: howDoIKnowThisIsSafe,
  },
  {
    question: 'Гранитные ограды',
    answer: howIsW3ADifferent,
  },
  {
    question: 'Благоустройство',
    answer: howExactlyW3AProtectMe,
  },
];
