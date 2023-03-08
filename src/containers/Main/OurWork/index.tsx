import React, { FC, memo } from 'react';

import cn from 'classnames';
import { useKeenSlider } from 'keen-slider/react';

import SlideButton from '@components/SlideButton';
import { BASE_IMG_URL } from '@constants/api.constants';
import { IconSliderLeft, IconSliderRight } from '@constants/icons.constants';
import { SECTIONS } from '@constants/sections.constants';
import Section from '@containers/Layout/Section';
import { getPerView } from '@helpers/slide.helper';
import useWindowSize from '@hooks/use-window-size.hooks';

import 'keen-slider/keen-slider.min.css';
import styles from './styles.module.scss';

type Props = {
  ourWorks: any
}

const OurWork: FC<Props> = (ourWorks) => {

  const imageArr = ourWorks.ourWorks.data[0].attributes.imges.data;

  const { width } = useWindowSize();

  const [sliderRef, instanceRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      origin: 'auto',
      perView: getPerView(width),
      spacing: 10,
    },
  });

  const gotoNext = () => instanceRef.current?.next();
  const gotoPrev = () => instanceRef.current?.prev();

  return (
    <Section id={SECTIONS.CATEGORIES} className={styles.wrapper}>
      <div className={styles.textWrap}>
        <h2 className={styles.title}>
          Наши работы
        </h2>
        <p className={styles.slideArrow}>
          <SlideButton
            onClick={() => gotoPrev()}
            className={styles.btnLeft}
            ariaLabel="Prev"
          >
            {IconSliderLeft}
          </SlideButton>
          <SlideButton
            onClick={() => gotoNext()}
            className={styles.btnRight}
            ariaLabel="Next"
          >
            {IconSliderRight}
          </SlideButton>
        </p>
      </div>
      <div ref={sliderRef} className={cn('keen-slider', styles.sliderWrap)}>
        {imageArr?.map(({ attributes }, i) => (
          <div className={cn(styles.itemWrap, `keen-slider__slide number-slide ${i + 1}`)}>
            <img src={`${BASE_IMG_URL}${attributes?.url}`} alt={`Work item ${String(i)}`} />
          </div>
        ))}
      </div>
    </Section>

  );
};

export default memo(OurWork);
