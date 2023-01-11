import styles from './button.module.scss';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Button = ({
  to,
  href,
  children,
  primary,
  outline,
  text,
  round,
  round_full,
  xs,
  sm,
  lg,
  leftIcon,
  rightIcon,
  className,
  disable,
  ...rest
}) => {
  let Comp = 'button';
  const props = { ...rest };

  if (to) {
    props.to = to;
    Comp = Link;
  }
  if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classStr = cx(
    {
      primary,
      outline,
      text,
      round,
      round_full,
      xs,
      sm,
      lg,
    },
    'btn',
    className,
  );

  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  return (
    <Comp {...props} className={classStr}>
      {leftIcon && <div className={cx('left_icon')}>{leftIcon}</div>}
      {children}
      {rightIcon && <div className={cx('right_icon')}>{rightIcon}</div>}
    </Comp>
  );
};

export default Button;
