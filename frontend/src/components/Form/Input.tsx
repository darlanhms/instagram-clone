import React, { useEffect, useRef, HTMLAttributes } from 'react'
import { useField } from '@unform/core'

import StyledInput from '../../styles/input'

interface Props {
  name: string
  label: string
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
    <div>
      <label>{label}</label>
      <StyledInput defaultValue={defaultValue} ref={inputRef} {...rest} />
    </div>
  )
}

export default Input
