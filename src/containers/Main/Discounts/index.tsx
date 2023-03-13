import React, { FC, memo } from 'react';

import { IStocksAttributes } from 'src/types/main-page.types';
import { DataType, StrapiReqType } from 'src/types/strapi.types';

import { BASE_IMG_URL } from '@constants/api.constants';
import { SECTIONS } from '@constants/sections.constants';
import Section from '@containers/Layout/Section';
import DiscountsItem from '@containers/Main/Discounts/DiscountsItem/DiscountsItem';

import styles from './styles.module.scss';

type Props = {
  stocks: StrapiReqType<DataType<IStocksAttributes>[]>
}

const Discounts: FC<Props> = ({ stocks }) => {
  const { data } = stocks;

  const getDiscountsItemImageUrl = (index: number) => `${BASE_IMG_URL}${data[index]?.attributes?.imgUrl?.data?.attributes?.url}`;

  return (
    <Section id={SECTIONS.CATEGORIES} className={styles.wrapper}>
      <div className={styles.textWrap}>
        <h2 className={styles.title}>
          Акции
        </h2>
        <div className={styles.itemWrap}>
          {data?.map((el, i: number) => (
            <DiscountsItem
              key={el.id}
              image={getDiscountsItemImageUrl(i)}
              title={el.attributes.title}
              description={el.attributes.description}
              price={el.attributes.price}
              oldPrice={el.attributes.oldPrice}
              index={el.id}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default memo(Discounts);
