import styles from './modal.module.css';
import classNames from 'classnames/bind';

import { useEffect } from 'react';

const cx = classNames.bind(styles);

const Modal = ({ ModalElement, children, onClose }) => {
  const handleClose = () => {
    ModalElement.current.style.display = 'none';
  };

  useEffect(() => {
    ModalElement.current.addEventListener('click', onClose);
    ModalElement.current.addEventListener('click', handleClose);

    // return () => {
    //   ModalElement.current.removeEventListener('click', onClose)
    //   ModalElement.current.removeEventListener('click', handleClose)
    // }
  }, []);

  return (
    <div ref={ModalElement} className={cx('modal')}>
      <div className={cx('modal__content')}>{children}</div>
    </div>
  );
};

export default Modal;
