import React, { memo } from 'react';

import Form from '@components/Form';
import Section from '@containers/Layout/Section';
import { CONTACTS_CONTENT } from '@containers/Main/Contacts/contacts.content';

import styles from './styles.module.scss';

const Contacts = () => {
  return (
    <Section className={styles.wrap}>
      <div className={styles.contactUs}>
        <h2 className={styles.title}>
          Связаться с нами
        </h2>
        <div className={styles.infoWrap}>
          {CONTACTS_CONTENT.map((el) => (
            <div className={styles.infoItem}>
              <p className={styles.infoTitle}>
                {el.title}
              </p>
              <h4 className={styles.infoDesc}>
                {el.description}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.formWrap}>
        <Form />
      </div>
    </Section>
  );
};

export default memo(Contacts);
