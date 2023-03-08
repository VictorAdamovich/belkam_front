import React, {
  ChangeEvent,
  FC, memo, ReactNode,
} from 'react';

import cn from 'classnames';

import styles from './input.module.scss';

interface TInputProps {
  className?: string,
  value?: string | number | null,
  label?: ReactNode | string,
  error?: string,
  name: string,
  placeholder?: string,
  disabled?: boolean,
  errorPositionAbsolute?: boolean,
  rightContent?: ReactNode,
  leftContent?: ReactNode,
  onChange?: (value: string) => void
  type?: string,
  readonly?: boolean,
}

const Input: FC<TInputProps> = ({
  className,
  value,
  name,
  label,
  onChange,
  disabled,
  error,
  placeholder,
  leftContent,
  rightContent,
  errorPositionAbsolute,
  type,
  readonly,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className={styles.containerWrapper}>
      {label && <label htmlFor={name} className={styles.textLabel}>{label}</label>}
      <div
        className={cn(styles.inputWrapper, className, { [styles.error]: error, [styles.readonly]: readonly })}
        data-disabled={disabled}
      >
        {leftContent && <div className={styles.leftContent}>{leftContent}</div>}
        <input
          id={name}
          name={name}
          className={styles.input}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readonly}
          type={type}
          {...(readonly ? {
            value: value?.toString(),
            tabIndex: -1,
          } : null)}
        />
        {rightContent && <div className={styles.rightContent}>{rightContent}</div>}
      </div>
      {error && <div className={cn(styles.textError, { [styles.errorPositionAbsolute]: errorPositionAbsolute })}>{error}</div>}
    </div>
  );
};

Input.defaultProps = {
  className: '',
  value: null,
  label: '',
  error: '',
  placeholder: '',
  disabled: false,
  errorPositionAbsolute: false,
  rightContent: undefined,
  leftContent: undefined,
  onChange: () => null,
  type: undefined,
  readonly: false,
};

export default memo<TInputProps>(Input);
