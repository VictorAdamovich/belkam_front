import React, { FC, memo } from 'react';

import styles from './styles.module.scss';

type Props={
  name: string,
  value: string
}

const CharacteristicsItem: FC<Props> = ({ name, value }) => {
  return (
    <div className={styles.characteristicsItem}>
      <span className={styles.itemName}>{name}</span>
      <span className={styles.itemValue}>{value}</span>
    </div>
  );
};

export default memo(CharacteristicsItem);
