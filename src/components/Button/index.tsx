import React, { memo } from 'react';

import cn from 'classnames';

import { BTN_DEFAULT_STYLE, UI_SIZE } from '@constants/ui.constants';

import 'focus-visible/dist/focus-visible.js';

import styles from './button.module.scss';

type Props = {
  className?: string,
  disabled?: boolean,
  children?: string,
  onClick?: () => void,
  defaultStyle: BTN_DEFAULT_STYLE
  size: UI_SIZE
  withControl?: boolean
}

const Button = ({
  className, onClick, children, disabled, defaultStyle, size, withControl,
}: Props) => {

  return (
    <button
      className={cn(styles.button, className, styles[defaultStyle], styles[size],
        {
          [styles.withControl]: withControl,
        })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {withControl && <div className={styles.control} />}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  disabled: false,
  children: null,
  onClick: () => { },
  withControl: false,
};

export default memo(Button);
