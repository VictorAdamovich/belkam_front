import React, { memo } from 'react';

import cn from 'classnames';

import 'focus-visible/dist/focus-visible.js';

import styles from './slideButton.module.scss';

type Props = {
  className?: string,
  children?: React.ReactNode,
  onClick?: () => void,
  ariaLabel: string
  disabled?: boolean
}

const SlideButton = ({
  className, onClick, children, ariaLabel, disabled,
}: Props) => {

  return (
    <button
      className={cn(styles.button, className)}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

SlideButton.defaultProps = {
  className: '',
  onClick: () => {
  },
  disabled: false,
  children: null,
};

export default memo(SlideButton);
