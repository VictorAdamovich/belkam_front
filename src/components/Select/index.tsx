import React, { FC, memo, SyntheticEvent } from 'react';

import cn from 'classnames';
import {
  DropdownItemProps, Select as SUSelect, SelectProps, StrictDropdownProps,
} from 'semantic-ui-react';

import styles from './styles.module.scss';

type Props = SelectProps & {
  options: DropdownItemProps[]
  value: StrictDropdownProps['value']
  onChange: (e: SyntheticEvent, data: never) => void
  className?: string
  styleType: 'paginationSelect' | 'currencySelect' | 'new'
  icon?: JSX.Element
}

const Select: FC<Props> = ({
  className,
  styleType,
  icon,
  ...props
}) => (
  <SUSelect
    icon={icon}
    {...props}
    className={cn(styles.select, className, styles[styleType])}
  />
);

Select.defaultProps = {
  className: '',
  icon: undefined,
};

export default memo(Select);
