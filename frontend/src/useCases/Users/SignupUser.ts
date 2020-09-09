import * as Yup from 'yup';
import User from '../../entities/User';
import api from '../../services/api';
import { tratAxiosError } from '../../utils/axios';

export default class SignupUserUseCase {
  public async execute(request: User): Promise<void> {
    const userSchema = Yup.object().shape({
      name: Yup.string().required('Informe o seu nome.'),
      email: Yup.string()
        .required('Informe um email.')
        .email('Informe um e-mail válido'),
      password: Yup.string()
        .required('Informe uma senha')
        .min(6, 'A senha deve ter ao menos 6 caracteres'),
      username: Yup.string().required('Informe um nome de usuário'),
    });

    try {
      await userSchema.validate(request, {
        abortEarly: false,
      });

      await api.post('/users', request);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        throw error;
      } else {
        throw new Error(tratAxiosError(error));
      }
    }
  }
}
