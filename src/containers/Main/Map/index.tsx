/* eslint-disable max-len */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { memo, useState } from 'react';

import cn from 'classnames';

import Button from '@components/Button';

import styles from './styles.module.scss';

const Map = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className={cn(styles.wrap, { [styles.active]: active })}>
      <Button
        size="sizeS"
        defaultStyle="black"
        className={styles.mapBtn}
        onClick={() => setActive(true)}
      >Смотреть на карте
      </Button>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A96f6300ebce00418cb995a8144daecbcd0ada7f1f61ff58af66313a8287db362&amp;source=constructor"
        frameBorder="0"
      />
    </div>
  );
};

export default memo(Map);
