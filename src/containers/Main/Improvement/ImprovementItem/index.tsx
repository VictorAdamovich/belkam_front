import React, { FC, memo } from 'react';

import cn from 'classnames';

import { iconCheckRound } from '@constants/icons.constants';

import styles from './styles.module.scss';

type Props = {
  image: string
  title: string
  benefits: string[]
  className: string;
}

const ImprovementItem: FC<Props> = ({
  image, title, benefits, className,
}) => (
  <div className={cn(styles.wrap, className)}>
    <img src={image} alt={title} />
    <div className={styles.info}>
      <div className={styles.title}>{title}</div>
      <div className={styles.descriptionWrap}>
        {benefits.map((el) => (
          <div className={styles.row}>
            <div className={styles.icon}>
              {iconCheckRound}
            </div>
            {el}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default memo(ImprovementItem);
