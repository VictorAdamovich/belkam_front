import React, { memo } from 'react';

import { SECTIONS } from '@constants/sections.constants';
import Section from '@containers/Layout/Section';

import BenefitsItem from './BenefitsItem';
import { BENEFITS_DATA } from './content';

import styles from './styles.module.scss';

const Benefits = () => (
  <Section id={SECTIONS.CATEGORIES} className={styles.wrapper}>
    <div className={styles.wrap}>
      <h2 className={styles.title}>Почему выбирают нас?</h2>
      <div className={styles.benefitsWrap}>
        {BENEFITS_DATA.map((el) => (
          <BenefitsItem
            key={el.title}
            icon={el.icon}
            title={el.title}
            description={el.description}
          />
        ))}
      </div>
    </div>
  </Section>
);

export default memo(Benefits);
