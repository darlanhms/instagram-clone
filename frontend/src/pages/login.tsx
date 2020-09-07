import React, { useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Form as Unform } from '@unform/web'
import { FormHandles, SubmitHandler } from '@unform/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

import LoginUserUseCase from '../useCases/Users/LoginUser'

import Input from '../components/Form/Input'
import Button from '../styles/button'
import {
  Container,
  ImageContent,
  FormContainer,
  FormContent,
  Divisor,
  ExternalLogin,
  ForgotPassword,
  ObtainApp
} from '../styles/pages/Login'
import { ErrorMessage } from '../styles/errorMessage'

import LoginImage from '../assets/images/instagram.png'
import Logo from '../assets/images/logo.png'
import AppStore from '../assets/images/app_store.png'
import PlayStore from '../assets/images/play_store.png'

const loginUser = new LoginUserUseCase()

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const [error, setError] = useState<string>()

  const handleFocusInput = () => {
    setError('')
  }

  const handleLogin: SubmitHandler<{
    email: string
    password: string
  }> = userInfo => {
    loginUser
      .execute(userInfo)
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        setError(err.message)
      })
  }

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <Container>
        <ImageContent>
          <img src={LoginImage} alt="Cellphone" />
        </ImageContent>
        <FormContainer>
          <FormContent style={{ marginTop: 18 }}>
            <img src={Logo} alt="Logo" />
            <fieldset>
              <Unform ref={formRef} onSubmit={handleLogin}>
                <Input
                  name="email"
                  placeholder="E-mail"
                  onFocus={handleFocusInput}
                />
                <Input
                  name="password"
                  type="password"
                  placeholder="Senha"
                  onFocus={handleFocusInput}
                />
                <Button style={{ marginTop: 15 }} type="submit">
                  Login
                </Button>
              </Unform>
            </fieldset>
            <Divisor>
              <div className="line"></div>
              <div className="text">OU</div>
              <div className="line"></div>
            </Divisor>
            <ExternalLogin>
              <FontAwesomeIcon size="lg" icon={faFacebookSquare} />
              <p>Faça login através do Facebook</p>
            </ExternalLogin>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <ForgotPassword>Esqueceu sua senha?</ForgotPassword>
          </FormContent>
          <FormContent style={{ marginTop: 10 }}>
            <p>
              Não tem uma conta? <Link href="/signup">Registre-se</Link>
            </p>
          </FormContent>
          <ObtainApp>
            <p>Obtenha o aplicativo.</p>
            <div className="images">
              <img src={AppStore} alt="Get on app store" />
              <img src={PlayStore} alt="Get on play store" />
            </div>
          </ObtainApp>
        </FormContainer>
      </Container>
    </div>
  )
}

export default Login
