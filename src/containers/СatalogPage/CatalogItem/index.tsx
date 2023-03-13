import React, { FC, memo } from 'react';

import Button from '@components/Button';
import { BTN_DEFAULT_STYLE, UI_SIZE } from '@constants/ui.constants';

import styles from './styles.module.scss';

type Props = {
  image: string
  description: string
  name: string
  price: number
}

const CatalogItem: FC<Props> = ({
  image, description, name, price,
}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.imageWrap}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.about}>
        <p className={styles.description}>
          {description}
        </p>
        <div className={styles.infoWrap}>
          <p className={styles.name}>
            {name}
          </p>
          <h4 className={styles.price}>
            {price}&nbsp;BYN
          </h4>
        </div>
        <Button
          defaultStyle={BTN_DEFAULT_STYLE.G}
          size={UI_SIZE.L}
          className={styles.btn}
        >Подробнее
        </Button>
      </div>
    </div>
  );
};

export default memo(CatalogItem);
