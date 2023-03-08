import React, { memo } from 'react';

import { SECTIONS } from '@constants/sections.constants';
import FooterLinks from '@containers/Layout/Footer/FooterLinks';
import FooterPrivacy from '@containers/Layout/Footer/FooterPrivacy';

import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer id={SECTIONS.FOOTER} className={styles.footer}>
      <FooterLinks />
      <FooterPrivacy />
    </footer>
  );
};

export default memo(Footer);
