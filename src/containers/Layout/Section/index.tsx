import React, { FC, ReactNode } from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  className?: string;
  children: ReactNode;
}

const Section: FC<Props> = ({ className, children, ...props }) => (
  <section className={cn(className, styles.wrap)} {...props}>{children}</section>
);

Section.defaultProps = {
  className: '',
};

export default Section;
