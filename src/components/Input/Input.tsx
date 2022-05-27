import React, {ChangeEventHandler, FC} from 'react';
import './Input.scss';
import classNames from 'classnames';

interface InputPropsInterface {
  id: string;
  className?: string;
  label: string;
  error?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input: FC<InputPropsInterface> = ({id, className, label, error, onChange}) => {
  const classes = classNames('input form-control', className, error);

  return (
    <div className="input-wrapper">
      {label && <label className="input-label" htmlFor={id}>{label}</label>}
      {/*{required && <span className="input-required">Required</span>}*/}
      <input
        name={id}
        id={id}
        type="text"
        placeholder="Search"
        className={classes}
        onChange={onChange}
      />

      {error && <div className="input-error">
        {error}
      </div>}
    </div>
  )
}
