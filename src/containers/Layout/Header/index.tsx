import React, { memo, useEffect, useState } from 'react';

import Link from 'next/link';
import cn from 'classnames';

import Button from '@components/Button';
import { iconHeaderLogo } from '@constants/icons.constants';
import { MAIN_LINKS, MAIN_LINKS_MOBILE } from '@constants/main.constants';
import { CATALOG_PATH } from '@constants/routes.constants';
import { SECTIONS } from '@constants/sections.constants';
import { BTN_DEFAULT_STYLE, UI_SIZE } from '@constants/ui.constants';

import styles from './styles.module.scss';

const Header = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpen]);

  return (
    <header id={SECTIONS.HEADER} className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.linksWrap}>

          <Link href="/">
            <a className={styles.headerLogo}>
              {iconHeaderLogo}
            </a>
          </Link>
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
          <Link href={CATALOG_PATH}>
            <a>
              <Button
                defaultStyle={BTN_DEFAULT_STYLE.B}
                size={UI_SIZE.M}
                className={styles.catalogBtn}
              >
                Каталог
              </Button>
            </a>
          </Link>

          <button
            className={styles.burgerWrap}
            onClick={() => setIsOpen((prev) => !prev)}
          ><span className={cn(styles.burger, { [styles.open]: isOpen })} />
          </button>

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
          <Link href={CATALOG_PATH}>
            <a>
              <Button
                defaultStyle={BTN_DEFAULT_STYLE.B}
                size={UI_SIZE.M}
                className={styles.catalogBtn}
              >
                Каталог
              </Button>
            </a>
          </Link>

        </div>
      </div>
    </header>
  );
};

export default memo(Header);
