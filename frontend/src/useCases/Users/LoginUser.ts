import User from '../../entities/User';
import api from '../../services/api';
import { tratAxiosError } from '../../utils/axios';

interface Request {
  email: string;
  password: string;
}

interface Response {
  token: string;
  user: User;
}

export default class LoginUserUseCase {
  public async execute({ email, password }: Request): Promise<Response> {
    if (email && password) {
      try {
        const { data } = await api.post('/users/login', {
          email,
          password,
        });

        if (!data.user || !data.user.id) {
          throw new Error('Usuário inválido, tente novamente');
        }

        return {
          token: data.token,
          user: new User(data.user, data.user.id),
        };
      } catch (error) {
        throw new Error(tratAxiosError(error));
      }
    } else {
      throw new Error('Informe usuário e senha');
    }
  }
}
