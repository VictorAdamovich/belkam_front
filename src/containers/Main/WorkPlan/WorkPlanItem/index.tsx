import React, { FC, memo } from 'react';

import cn from 'classnames';

import Button from '@components/Button';
import { iconCheckRound } from '@constants/icons.constants';

import styles from './styles.module.scss';

type Props = {
  title: string
  price: number
  includes: string[]
  includesFree: string[]
  even: boolean
}

const WorkPlanItem: FC<Props> = ({
  title, price, includes, includesFree, even,
}) => {

  return (
    <div className={cn(styles.wrap, { [styles.dark]: even })}>
      <h3 className={styles.title}>{title}</h3>
      <h2 className={styles.price}>
        <span className={styles.startFrom}>от</span>
        {price} BYN
      </h2>
      <div className={styles.includesWrap}>
        {includes.map((el) => (
          <div className={styles.row}>
            <div className={styles.icon}>
              {iconCheckRound}
            </div>
            {el}
          </div>
        ))}
      </div>
      <div className={styles.includesFreeWrap}>
        <p className={styles.free}>Бесплатно</p>
        {includesFree.map((el) => (
          <div className={styles.row}>
            <div className={styles.icon}>
              {iconCheckRound}
            </div>
            {el}
          </div>
        ))}
      </div>

      <Button
        size="sizeL"
        className={styles.btn}
        defaultStyle={even ? 'white' : 'black'}
      >
        Заказать пакет
      </Button>

    </div>
  );
};

export default memo(WorkPlanItem);
