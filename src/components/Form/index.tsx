import React, { FC, memo } from 'react';

import cn from 'classnames';
import { useForm } from 'react-hook-form';

import styles from './styles.module.scss';

type IFormInput = {
  firstName: string;
  phone: string;
  privacy: boolean;
}
type Props = {
  className?: string;
}

const Form: FC<Props> = ({ className }) => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <form
      className={cn(styles.wrap, className)}
      onSubmit={() => handleSubmit(onSubmit)}
    >
      <h3 className={styles.title}>
        Мы проконсультируем вас по всем вопросам
      </h3>
      <p className={styles.description}>
        Оставьте свои контактные данные, наш специалист свяжется с вами и ответит на все
        ваши вопросы!
      </p>
      <input
        className={styles.dataInput}
        placeholder="Имя Фамилия"
        {...register('firstName')}
      />
      <input
        className={styles.dataInput}
        type="tel"
        placeholder="+375 (12) 345-67-89"
        {...register('phone')}
      />
      <div className={styles.privacy}>
        <input
          type="checkbox"
          className={styles.privacyCheck}
          {...register('privacy')}
        />
        <p>
          Я согласен на обработку персональных данных*
        </p>
      </div>
      <input
        className={styles.submit}
        value="Получить консультацию"
        type="submit"
      />
    </form>
  );
};

Form.defaultProps = {
  className: '',
};

export default memo(Form);
