import React, { FC, memo } from 'react';

import Link from 'next/link';
import cn from 'classnames';

import styles from './styles.module.scss';

interface Props {
  data: Array<IItem>
  className?: string;
  classNameItemWrapper?: string;
  classNameItem?: string;
}
interface IItem {
  text: string;
  href?: string;
}

const Breadcrumbs: FC<Props> = ({
  data, className, classNameItemWrapper, classNameItem,
}) => (
  <div className={cn(styles.wrapper, className)}>
    {data.map((item) => {
      if (item.href) {
        return (
          <span className={cn(styles.item, classNameItemWrapper)} key={item.text}>
            <Link href={item.href}>
              <a className={styles.itemLink}>{item.text} <span className={styles.dash}> - </span></a>
            </Link>
          </span>
        );
      }
      return (
        <>
          <span className={styles.dash}>&nbsp;-&nbsp;</span>
          <span className={cn(styles.item, classNameItem)} key={item.text}>
            {item.text}
          </span>
        </>
      );
    })}
  </div>
);

Breadcrumbs.defaultProps = {
  className: '',
  classNameItemWrapper: '',
  classNameItem: '',
};

export default memo(Breadcrumbs);
