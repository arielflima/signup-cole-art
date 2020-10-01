import React, { useCallback, useRef, useState } from 'react';
import { TextInputProps } from 'react-native';

import {useField} from '@unform/core'

import {Container, Icon, TextInput} from './styles'

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  containerStyle?: {};
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { name, icon, containerStyle = {}, ...rest }
  ref,
) => {
  const inputElementRef = useRef<any>(null);

  const {registerField, defaultValue = '', fieldName, error } = useField(name)
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue })

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputValueRef.current.value)
  })

  return (
    <Container>
      <Icon />
      <TextInput />
    </Container>
  )
}
