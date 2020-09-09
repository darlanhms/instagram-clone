import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { setToken } from '../services/api';
import { redirectTo } from '../utils';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    if (localStorage.getItem('acesso')) {
      setToken(localStorage.getItem('acesso'));
      if (['/login', '/signup'].includes(window.location.pathname)) {
        redirectTo('/');
      }
    } else {
      redirectTo('/login');
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
