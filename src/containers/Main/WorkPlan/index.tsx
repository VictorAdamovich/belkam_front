import React, { FC, memo } from 'react';

import cn from 'classnames';
import { useKeenSlider } from 'keen-slider/react';

import SlideButton from '@components/SlideButton';
import { IconSliderLeft, IconSliderRight } from '@constants/icons.constants';
import { SECTIONS } from '@constants/sections.constants';
import Section from '@containers/Layout/Section';
import useBreakpoint from '@hooks/use-breakpoint.hooks';

import { WORK_PLAN_DATA } from './content';
import WorkPlanItem from './WorkPlanItem';

import styles from './styles.module.scss';

type Props = {
  workPlan: any
}

const WorkPlan: FC<Props> = ({ workPlan }) => {

  const { isBreakpointXxlNew: isSmall, isBreakpointSm: isMobile } = useBreakpoint();

  const [sliderRef, instanceRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      origin: 'auto',
      perView: isMobile ? 1 : 2,
      spacing: 20,
    },
  });

  const gotoNext = () => instanceRef.current?.next();
  const gotoPrev = () => instanceRef.current?.prev();

  return (
    <Section id={SECTIONS.CATEGORIES} className={styles.wrapper}>
      <div className={styles.wrap}>
        <h2 className={styles.title}>Выберите индивидуальный план работы</h2>
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
        {isSmall
          ? (
            <div ref={sliderRef} className={cn(styles.benefitsWrap, { 'keen-slider': isSmall })}>
              {WORK_PLAN_DATA.map((el, i) => (
                <WorkPlanItem
                  className={isSmall ? `keen-slider__slide number-slide ${i + 1}` : ''}
                  key={el.title}
                  title={el.title}
                  price={workPlan?.data[i]?.attributes?.price}
                  includes={el.includes}
                  includesFree={el.includesFree}
                  even={i % 2 !== 0}
                />
              ))}
            </div>
          )
          : (
            <div className={styles.benefitsWrap}>
              {WORK_PLAN_DATA.map((el, i) => (
                <WorkPlanItem
                  key={el.title}
                  title={el.title}
                  price={workPlan?.data[i]?.attributes?.price}
                  includes={el.includes}
                  includesFree={el.includesFree}
                  even={i % 2 !== 0}
                />
              ))}
            </div>
          )}
      </div>
    </Section>
  );
};

export default memo(WorkPlan);
