import React, { FC, memo } from 'react';

import cn from 'classnames';

import { IconQuotes } from '@constants/icons.constants';

import styles from './styles.module.scss';

type Props = {
  description: string
  name: string
  type: string
  className: string
}

const ReviewsItem: FC<Props> = ({
  description,
  name,
  type,
  className,
}) => (
  <div className={cn(styles.wrap, className)}>
    <div className={styles.descWrap}>
      <div className={styles.icon}>{IconQuotes}</div>
      <p className={styles.description}>{description}</p>
    </div>
    <div className={styles.userWrap}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.type}>{type}</p>
    </div>
  </div>
);

export default memo(ReviewsItem);
