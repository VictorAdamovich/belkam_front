import React, { useState } from 'react';

import AccordionItem, { accordionItemDataType } from '@components/Accordion/AccordionItem';

import styles from './styles.module.scss';

type Props = {
  data: accordionItemDataType[]
  isOpen?: boolean
  className?: string
}

const open = 0;
const close = -1;

export const Accordion = ({
  data,
  isOpen,
  className,
}: Props) => {

  const openItem = isOpen ? open : close;
  const [activeItem, setActiveItem] = useState<number>(openItem);

  const onToggle = (index: number) => setActiveItem(index);

  return (
    <>
      <ul className={styles.accordionWrapper}>
        {data.map((el, index) => (
          <AccordionItem
            key={`AccordionItem${index + 1}`}
            index={index}
            data={el}
            open={activeItem === index}
            onToggle={onToggle}
            className={className}
          />
        ))}
      </ul>
    </>
  );
};

Accordion.defaultProps = {
  isOpen: false,
  className: '',
};
