import React, { FC, memo } from 'react';

import Button from '@components/Button';

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
          defaultStyle="green"
          size="sizeL"
          className={styles.btn}
        >Подробнее
        </Button>
      </div>
    </div>
  );
};

export default memo(CatalogItem);
