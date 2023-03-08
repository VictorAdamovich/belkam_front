import React from 'react';

import styles from './styles.module.scss';

const Advantages = () => {
  return (
    <div className={styles.advantages}>
      <div className={styles.advantagesItem}>
        <p className={styles.advantagesValue}>
          <span className={styles.bigText}>15</span> лет
        </p>
        <p className={styles.advantagesDesc}>
          Гарантия
        </p>
      </div>
      <div className={styles.advantagesItem}>
        <p className={styles.advantagesValue}>
          до <span className={styles.bigText}>12</span> месяцев
        </p>
        <p className={styles.advantagesDesc}>
          Рассрочка
        </p>
      </div>
      <div className={styles.advantagesItem}>
        <p className={styles.advantagesValue}>
          <span className={styles.bigText}>15-40</span> дней
        </p>
        <p className={styles.advantagesDesc}>
          Изготовление
        </p>
      </div>
      <div className={styles.advantagesItem}>
        <p className={styles.advantagesValue}>
          до <span className={styles.bigText}>1</span> года
        </p>
        <p className={styles.advantagesDesc}>
          Хранение
        </p>
      </div>
    </div>
  );
};

export default Advantages;
