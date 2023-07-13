import { FunctionComponent } from 'react';
import * as classNames from 'classnames';
import styles from './Button.module.css';

interface Props {
  className: string;
  onClick(): void;
  disabled: boolean;
  text: string;
}

export const Button: FunctionComponent<Props> = ({
  className,
  onClick,
  disabled = false,
  text,
}) => {
  return (
    <button
      className={classNames(className, styles.button)}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
