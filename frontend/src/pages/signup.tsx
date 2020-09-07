import React, { useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Form as Unform } from '@unform/web'
import { FormHandles, SubmitHandler } from '@unform/core'

import { Container } from '../styles/pages/Signup'
import { FormContent, ObtainApp } from '../styles/pages/Login'
import Button from '../styles/button'
import Input from '../styles/input'

import Logo from '../assets/images/logo.png'
import AppStore from '../assets/images/app_store.png'
import PlayStore from '../assets/images/play_store.png'
import User from '../entities/User'

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const [error, setError] = useState<string>()

  const handleFocusInput = () => {
    setError('')
  }

  const handleSignup: SubmitHandler<User> = (userInfo): void => {}

  return (
    <div>
      <Head>
        <title>Registre-se</title>
      </Head>
      <Container>
        <FormContent>
          <img src={Logo} alt="" />
          <fieldset>
            <Unform ref={formRef} onSubmit={handleSignup}>
              <Input
                name="email"
                placeholder="E-mail"
                onFocus={handleFocusInput}
              />
              <Input
                name="name"
                placeholder="Nome completo"
                onFocus={handleFocusInput}
              />
              <Input
                name="username"
                placeholder="Nome de usuário"
                onFocus={handleFocusInput}
              />
              <Input
                name="password"
                type="password"
                placeholder="Senha"
                onFocus={handleFocusInput}
              />
              <Button style={{ marginTop: 15 }} type="submit">
                Registre-se
              </Button>
            </Unform>
          </fieldset>
        </FormContent>
        <FormContent style={{ marginTop: 10 }}>
          <p>
            Já tem uma conta? <Link href="/login">Log in</Link>
          </p>
        </FormContent>
        <ObtainApp>
          <p>Obtenha o aplicativo.</p>
          <div className="images">
            <img src={AppStore} alt="Get on app store" />
            <img src={PlayStore} alt="Get on play store" />
          </div>
        </ObtainApp>
      </Container>
    </div>
  )
}
export default Register
