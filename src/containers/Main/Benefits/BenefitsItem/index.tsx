import React, { FC, memo, ReactNode } from 'react';

import styles from './styles.module.scss';

type Props={
  icon: ReactNode
  title: string
  description: string
}

const BenefitsItem: FC<Props> = ({ icon, title, description }) => (
  <div className={styles.wrap}>
    <div className={styles.header}>
      <div className={styles.icon}>
        {icon}
      </div>
      <h4 className={styles.title}>{title}</h4>
    </div>
    <div className={styles.main}>
      <p className={styles.description}>
        {description}
      </p>
    </div>
  </div>
);

export default memo(BenefitsItem);
