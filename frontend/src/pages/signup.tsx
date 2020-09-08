import React, { useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Form as Unform } from '@unform/web'
import { FormHandles, SubmitHandler } from '@unform/core'
import { ValidationError } from 'yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

import { Container, Subtitle } from '../styles/pages/Signup'
import { Divisor, FormContent, ObtainApp } from '../styles/pages/Login'
import Button from '../styles/button'
import Input from '../components/Form/Input'

import User from '../entities/User'
import SignupUserUseCase from '../useCases/Users/SignupUser'

import Logo from '../assets/images/logo.png'
import AppStore from '../assets/images/app_store.png'
import PlayStore from '../assets/images/play_store.png'
import { ErrorMessage } from '../styles/errorMessage'

const SignupUser = new SignupUserUseCase()

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const [error, setError] = useState<string>()

  const handleFocusInput = () => {
    setError('')
  }

  const handleSignup: SubmitHandler<User> = async (userInfo): Promise<void> => {
    try {
      await SignupUser.execute(userInfo)
    } catch (error) {
      if (error instanceof ValidationError) {
        const errorObject = {}

        error.inner.forEach(err => {
          errorObject[err.path] = err.message
        })

        formRef.current.setErrors(errorObject)
      } else {
        setError(error.message)
      }
    }
  }

  return (
    <div>
      <Head>
        <title>Registre-se</title>
      </Head>
      <Container>
        <FormContent>
          <img src={Logo} alt="" />
          <Subtitle>
            Registre-se para ver fotos e vídeos dos seus amigos
          </Subtitle>
          <Button>
            <FontAwesomeIcon
              icon={faFacebookSquare}
              size="lg"
              style={{ marginRight: 5 }}
            />
            Registre-se com o Facebook
          </Button>
          <Divisor>
            <div className="line"></div>
            <div className="text">OU</div>
            <div className="line"></div>
          </Divisor>
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
              {error && (
                <ErrorMessage style={{ marginTop: 10, fontSize: 12 }}>
                  {error}
                </ErrorMessage>
              )}
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
