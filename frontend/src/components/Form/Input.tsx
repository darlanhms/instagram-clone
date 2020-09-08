import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import StyledInput from '../../styles/input'
import { ErrorMessage } from '../../styles/errorMessage'

interface Props {
  name: string
  label?: string
}

type InputProps = JSX.IntrinsicElements['input'] & Props

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const { fieldName, defaultValue, registerField, error } = useField(name)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <>
      {label && <label>{label}</label>}
      <StyledInput
        defaultValue={defaultValue}
        ref={inputRef as any}
        {...rest}
      />
      {error && (
        <ErrorMessage
          style={{
            marginBottom: 5,
            fontSize: 11,
            textAlign: 'left'
          }}
        >
          {error}
        </ErrorMessage>
      )}
    </>
  )
}

export default Input
