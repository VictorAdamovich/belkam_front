import React, { FC } from 'react';

import ModalWrap from '../ModalWrap';

import styles from './styles.module.scss';

type Props = {
  text: string;
  onSuccess: () => void;
  onFailure: () => void;
}

const ConsultationModal: FC<Props & {
  onClose: () => void;
}> = ({
  onClose, onFailure, onSuccess, text, ...props
}) => {

  return (
    <ModalWrap {...props} onClose={onClose} title={text}>
      <div className={styles.wrap}>
        asf
        {/* <Form className={styles.form} /> */}
      </div>
    </ModalWrap>
  );
};

export default ConsultationModal;
