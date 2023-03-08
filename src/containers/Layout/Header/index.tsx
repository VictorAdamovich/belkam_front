import React, { memo, useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

import Button from '@components/Button';
import { iconHeaderLogo } from '@constants/icons.constants';
import { MAIN_LINKS, MAIN_LINKS_MOBILE } from '@constants/main.constants';
import { SECTIONS } from '@constants/sections.constants';

import styles from './styles.module.scss';

const Header = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const router = useRouter();

  const onLogoClickHandle = () => router.push('/');
  const onCatalogBtnClick = () => router.push('/catalog/');

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [isOpen]);

  return (
    <header id={SECTIONS.HEADER} className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.linksWrap}>

          <div className={styles.headerLogo} onClick={() => onLogoClickHandle()}>
            {iconHeaderLogo}
          </div>
          <div className={styles.headerLinks}>
            {MAIN_LINKS.map((el) => (
              <Link href={el.href}>
                <a>
                  {el.value}
                </a>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.headerBtn}>
          <Button
            defaultStyle="black"
            size="sizeM"
            className={styles.catalogBtn}
            onClick={() => onCatalogBtnClick()}
          >
            Каталог
          </Button>
          <div
            className={styles.burgerWrap}
            onClick={() => setIsOpen(!isOpen)}
          >
            <button
              className={cn(styles.burger, { [styles.open]: isOpen })}
            />
          </div>

        </div>
        <div className={cn(styles.mobileMenu, { [styles.show]: isOpen })}>
          <div className={cn(styles.headerLinks, styles.mobileLinks)}>
            {MAIN_LINKS_MOBILE.map((el) => (
              <div>
                <p className={styles.linkTitle}>{el.title}</p>
                <Link href={el.href}>
                  <a>
                    {el.value}
                  </a>
                </Link>
              </div>
            ))}
          </div>
          <Button
            defaultStyle="black"
            size="sizeM"
            className={styles.catalogBtn}
            onClick={() => onCatalogBtnClick()}
          >
            Каталог
          </Button>

        </div>

      </div>
    </header>
  );
};

export default memo(Header);
