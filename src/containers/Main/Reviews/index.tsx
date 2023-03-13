import React, { FC, memo } from 'react';

import cn from 'classnames';
import { useKeenSlider } from 'keen-slider/react';
import { IReviewsAttributes } from 'src/types/main-page.types';
import { DataType, StrapiReqType } from 'src/types/strapi.types';

import SlideButton from '@components/SlideButton';
import { IconSliderLeft, IconSliderRight } from '@constants/icons.constants';
import { SECTIONS } from '@constants/sections.constants';
import Section from '@containers/Layout/Section';
import ReviewsItem from '@containers/Main/Reviews/ReviewsItem';
import { getPerViewForReviews } from '@helpers/slide.helper';
import useWindowSize from '@hooks/use-window-size.hooks';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styles from './styles.module.scss';

type Props = {
  reviews: StrapiReqType<DataType<IReviewsAttributes>[]>
}

const Reviews: FC<Props> = ({ reviews }) => {
  const { data: reviewsData } = reviews;

  const { width } = useWindowSize();

  const [sliderRef, instanceRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      origin: 'auto',
      perView: getPerViewForReviews(width),
      spacing: 10,
    },
  });

  const gotoNext = () => instanceRef.current?.next();
  const gotoPrev = () => instanceRef.current?.prev();

  return (
    <>
      <Section id={SECTIONS.CATEGORIES} className={styles.wrapper}>
        <div className={styles.textWrap}>
          <h2 className={styles.title}>
            Отзывы наших клиентов
          </h2>
          <div className={styles.slideArrow}>
            <SlideButton
              onClick={() => gotoPrev()}
              ariaLabel="Prev"
            >
              {IconSliderLeft}
            </SlideButton>
            <SlideButton
              onClick={() => gotoNext()}
              ariaLabel="Next"
            >
              {IconSliderRight}
            </SlideButton>
          </div>
        </div>

        <div ref={sliderRef} className={cn('keen-slider', styles.sliderWrap)}>
          {reviewsData?.map(({ attributes }, i) => (
            <ReviewsItem
              key={`Reviews ${String(i)}`}
              className={`keen-slider__slide number-slide ${i + 1}`}
              description={attributes.description}
              name={attributes.name}
              type={attributes.type}
            />
          ))}
        </div>
      </Section>
    </>
  );
};

export default memo(Reviews);
