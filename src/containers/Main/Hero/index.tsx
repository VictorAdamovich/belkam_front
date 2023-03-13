import React, { memo } from 'react';

import Button from '@components/Button';
import { MODAL_TYPES } from '@constants/modals.constants';
import { SECTIONS } from '@constants/sections.constants';
import Section from '@containers/Layout/Section';
import { useModals } from '@hooks/modals.hooks';

import styles from './styles.module.scss';

const Hero = () => {

  const { showModal } = useModals();

  return (
    <div className={styles.background}>
      <Section id={SECTIONS.HERO} className={styles.wrapper}>
        <div className={styles.wrap}>
          <Button size="sizeL" defaultStyle="black" className={styles.catalogBtn}>
            Каталог
          </Button>
          <h1 className={styles.title}>
            Памятники и изделия из гранита
          </h1>
          <h4 className={styles.description}>
            Благоустройство, захоронения, установка памятников и оград
          </h4>
          <Button
            size="sizeL"
            defaultStyle="green"
            className={styles.contactUS}
            onClick={() => showModal(MODAL_TYPES.CONSULTATION)}
          >
            Заказать консультацию
          </Button>

        </div>
      </Section>
    </div>
  );
};

export default memo(Hero);
