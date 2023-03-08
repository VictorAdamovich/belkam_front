import React, { memo } from 'react';

import Button from '@components/Button';
import Advantages from '@containers/Product/Advantages';
import CharacteristicsItem from '@containers/Product/CharacteristicsItem';
import { characteristics } from '@containers/Product/MOKCItem';

import styles from './styles.module.scss';

const Product = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.info}>
        <div className={styles.itemImage}>
          <img src="/images/monuments/monumetn6.png" alt="iamge" />
        </div>
        <div className={styles.itemDesc}>
          <h4 className={styles.type}>A-01</h4>
          <h2 className={styles.itemTitle}>Вертикальный памятник</h2>
          <div className={styles.priceWrap}>
            <h2 className={styles.itemPrice}>997 BYN</h2>
            <Button
              size="sizeM"
              defaultStyle="green"
              className={styles.btn}
            >Заказать изготовление
            </Button>
          </div>
          <div className={styles.characteristics}>
            {characteristics.map((el) => (
              <CharacteristicsItem
                key={el.name}
                name={el.name}
                value={el.value}
              />
            ))}
          </div>
          <p className={styles.specDesc}>
            Изделие можно изготовить из другого гранита и другого размера.
            Художественное оформление не ходит в стоимость изделия
          </p>
          <Advantages />
        </div>
      </div>
      <div className={styles.similarProducts}>
        <h2 className={styles.similarProductsTitle}>
          Похожие товары
        </h2>
      </div>
    </div>
  );
};

export default memo(Product);
