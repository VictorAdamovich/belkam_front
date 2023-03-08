import React, { memo } from 'react';

import cn from 'classnames';
import { useKeenSlider } from 'keen-slider/react';

import SlideButton from '@components/SlideButton';
import { IconSliderLeft, IconSliderRight } from '@constants/icons.constants';
import { SECTIONS } from '@constants/sections.constants';
import Section from '@containers/Layout/Section';
import { IMPROVEMENT_SLIDE_ITEMS } from '@containers/Main/Improvement/improvement.content';
import SlideItem from '@containers/Main/Improvement/ImprovementItem';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styles from './styles.module.scss';

const Improvement = () => {

  const [sliderRef, instanceRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      origin: 'auto',
      perView: 1,
      spacing: 10,
    },
  });

  const gotoNext = () => instanceRef.current?.next();
  const gotoPrev = () => instanceRef.current?.prev();

  return (
    <Section id={SECTIONS.CATEGORIES} className={styles.wrapper}>
      <div className={styles.textWrap}>
        <h2 className={styles.title}>
          Благоустройство могил и мест захоронения
        </h2>
        <p className={styles.descriptions}>
          Желая увековечить память покойных близких, уделите должное внимание
          благоустройству могил. Этот этап работы идет после установки надгробного
          памятника.
          <br />
          <br />
          Но если этого не было сделано сразу, благоустройство мест захоронения может быть
          проведено через время. Мероприятия будут проведены грамотно и профессионально,
          что
          даст достойный внешний вид памятника даже спустя годы. Даем гарантию 3 года на
          благоустройство
        </p>
      </div>
      <div className={styles.sliderWrap}>
        <div ref={sliderRef} className={cn('keen-slider', styles.sliderWrap)}>
          {IMPROVEMENT_SLIDE_ITEMS.map((el, index) => (
            <SlideItem
              className={`keen-slider__slide number-slide ${index + 1}`}
              key={el.title}
              image={el.image}
              title={el.title}
              benefits={el.benefits}
            />
          ))}
        </div>
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
      </div>
    </Section>
  );
};

export default memo(Improvement);
