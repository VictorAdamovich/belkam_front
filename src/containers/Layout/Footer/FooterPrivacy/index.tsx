import React from 'react';

import Link from 'next/link';
import moment from 'moment';

import { FOOTER_CATALOG } from '@containers/Layout/Footer/footer.content';

import styles from './styles.module.scss';

const FooterPrivacy = () => {
  return (
    <div className={styles.privacy}>
      <p className={styles.copy}>
        © Все права защищены&nbsp;{String(moment(Date.now()).format('YYYY'))}.
        ООО&nbsp;“БЕЛКАМЕНЬ” УНП&nbsp;699111000
      </p>
      <div className={styles.catalogLinks}>
        {FOOTER_CATALOG.map((el) => (
          <Link href={el.link}>
            <a>
              {el.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterPrivacy;
