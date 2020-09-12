import { AxiosError } from 'axios';

export const tratAxiosError = (err: AxiosError): string => {
  if (err.response) {
    const {
      data: { message },
    } = err.response;

    if (message) {
      return message;
    }
  } else {
    return 'Erro inesperado, tente novamente mais tarde';
  }
};
