import React, {
  memo, useEffect, useRef, useState,
} from 'react';

import cn from 'classnames';

import useWindowSize from '@hooks/use-window-size.hooks';

import styles from './styles.module.scss';

type Props = {
  data: accordionItemDataType
  index: number
  open: boolean
  onToggle: (index: number) => void
  className?: string
}

export type accordionItemDataType = {
  question: string | React.ReactNode
  answer: string | React.ReactNode
}

const AccordionItem = ({
  index, open, data, onToggle, className,
}: Props) => {
  const { question, answer } = data;

  const [height, setHeight] = useState<number | undefined>(0);

  const { width } = useWindowSize();

  const el: React.RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (open) {
      setHeight(el.current?.offsetHeight);
    } else {
      setHeight(0);
    }
  }, [width, open]);

  return (
    <li className={styles.wrapper}>
      <button className={styles.questionBtn} onClick={() => onToggle(index)}>
        {question}
        <span className={cn(styles.control, { [styles.open]: open })} />
      </button>

      <div
        className={styles.answerWrapper}
        style={open
          ? { height }
          : { height: 0 }}
      >
        <div
          ref={el}
          className={cn(styles.answer, className)}
        >
          {answer}
        </div>
      </div>
    </li>
  );
};

AccordionItem.defaultProps = {
  className: '',
};

export default memo(AccordionItem);
