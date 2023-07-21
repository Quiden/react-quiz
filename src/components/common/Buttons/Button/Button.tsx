import './Button.css';

import * as classNames from 'classnames';
import { FunctionComponent } from 'react';

interface Props {
  className: string;
  onClick?(): void;
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
      className={classNames("button", className)}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
      {className.indexOf("right") !== -1 &&
        <svg className={"iconRight"} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0001 29.3334C23.3641 29.3334 29.3334 23.3641 29.3334 16.0001C29.3334 8.63608 23.3641 2.66675 16.0001 2.66675C8.63608 2.66675 2.66675 8.63608 2.66675 16.0001C2.66675 23.3641 8.63608 29.3334 16.0001 29.3334Z" fill="#00D02E"/>
          <path d="M11 16.2083L14.5135 20L21 13" stroke="white" stroke-width="1.4" stroke-linecap="round"/>
        </svg>
      }
      {className.indexOf("wrong") !== -1 && className.indexOf("right") === -1 &&
        <svg className={"iconWrong"} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0001 28.6667C23.3641 28.6667 29.3334 22.6973 29.3334 15.3333C29.3334 7.96933 23.3641 2 16.0001 2C8.63608 2 2.66675 7.96933 2.66675 15.3333C2.66675 22.6973 8.63608 28.6667 16.0001 28.6667Z" fill="#D00000"/>
          <path d="M21 11L11 21" stroke="white" stroke-width="1.4" stroke-linecap="round"/>
          <path d="M11 11L21 21" stroke="white" stroke-width="1.4" stroke-linecap="round"/>
        </svg>
      }
    </button>
  );
};
