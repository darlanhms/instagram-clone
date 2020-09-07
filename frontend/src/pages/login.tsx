import React, { useRef } from 'react'
import Head from 'next/head'
import { Form } from '@unform/web'
import { FormHandles, SubmitHandler } from '@unform/core'
import api from '../services/api'

import Input from '../components/Form/Input'
import Button from '../styles/button'

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const handleLogin: SubmitHandler<{
    email: string
    password: string
  }> = ({ email, password }) => {
    if (email && password) {
      api
        .post('/users/login', {
          email,
          password
        })
        .then(({ data: { user, token } }) => {
          console.log(user, token)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <main>
        <Form ref={formRef} onSubmit={handleLogin}>
          <Input name="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />
          <Button type="submit">Login</Button>
        </Form>
      </main>
    </div>
  )
}

export default Login
