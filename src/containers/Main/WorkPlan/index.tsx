import React, { FC, memo } from 'react';

import { SECTIONS } from '@constants/sections.constants';
import Section from '@containers/Layout/Section';

import { WORK_PLAN_DATA } from './content';
import WorkPlanItem from './WorkPlanItem';

import styles from './styles.module.scss';

type Props = {
  workPlan: any
}

const WorkPlan: FC<Props> = ({ workPlan }) => {
  return (
    <Section id={SECTIONS.CATEGORIES} className={styles.wrapper}>
      <div className={styles.wrap}>
        <h2 className={styles.title}>Выберите индивидуальный план работы</h2>
        {}
        <div className={styles.benefitsWrap}>
          {WORK_PLAN_DATA.map((el, i) => (
            <WorkPlanItem
              key={el.title}
              title={el.title}
              price={workPlan.data[i].attributes.price}
              includes={el.includes}
              includesFree={el.includesFree}
              even={i % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default memo(WorkPlan);
