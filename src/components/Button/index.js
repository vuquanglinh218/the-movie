import styles from './button.module.css'
import classNames from "classnames/bind";

import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

const Button = ({
  to,
  href,
  disable,
  primary,
  outline,
  text,
  round,
  small,
  medium,
  lager,
  children,
  className,
  ...restProps
}) => {
  const props = {...restProps}
  var Comp = 'button'
  if (to) {
    Comp = Link
    props.to = to
  } 
  if (href) {
    Comp = 'a'
    props.href = href
  }

  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function' ) {
        delete props[key]
      }
    });
  }

  const classString = cx({
    primary,
    outline,
    text,
    round,
    small,
    medium,
    lager,
  }, 'btn', className)

  return (
    <Comp {...props} className={classString}>
      {children}
    </Comp>
   );
}
 
export default Button  