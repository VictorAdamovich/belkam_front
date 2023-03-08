import React, { FC, memo } from 'react';

import styles from './styles.module.scss';

type Props = {
  image: string
  title: string
  description: string
  price: number
  oldPrice: number
  index: number
}

const DiscountsItem: FC<Props> = ({
  image, title, description, price, oldPrice, index,
}) => (
  <div className={styles.wrap}>
    <div className={styles.imageWrap}>
      <img src={image} alt={`discounts ${String(index)}`} />
    </div>
    <div className={styles.infoWrap}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <h3 className={styles.price}>
        {price} BYN
        <span className={styles.oldPrice}>{oldPrice}</span>
      </h3>
    </div>
  </div>
);

export default memo(DiscountsItem);
