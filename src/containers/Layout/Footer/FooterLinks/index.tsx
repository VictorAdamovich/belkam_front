import React from 'react';

import Link from 'next/link';

import ArrowButton from '@components/SlideButton';
import { iconFooterLogo, IconSliderRight } from '@constants/icons.constants';
import { MAIN_LINKS } from '@constants/main.constants';

import styles from './styles.module.scss';

const FooterLinks = () => {
  const onClickHandle = () => {
    window.scrollTo({
      top: 100,
      behavior: 'smooth',
    });
  };
  return (
    <div className={styles.footerLinks}>
      <div className={styles.footerLogo}>
        {iconFooterLogo}
      </div>
      <div className={styles.links}>

        {MAIN_LINKS.map((el) => (
          <Link href={el.href}>
            <a>
              {el.value}
            </a>
          </Link>
        ))}
      </div>

      <ArrowButton
        onClick={onClickHandle}
        className={styles.goTopBtn}
        ariaLabel="Next"
      >
        {IconSliderRight}
      </ArrowButton>
    </div>
  );
};

export default FooterLinks;
