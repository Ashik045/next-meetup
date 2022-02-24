import React, { useState } from 'react';
import styles from './formInp.module.scss';

const FormInput = (props) => {
    const [focused, setFocused] = useState(false)
    const {label, errorMessage, onChange, ...inputProps} = props

    const handleFocus = (e) => {
        setFocused(true)
    }

  return (
    <div className={styles.form_inp}>
        <label>{label}:</label>
        <input
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={() => inputProps.name === "conPassword" && setFocused(true)}
            focused={focused.toString()}
            />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput