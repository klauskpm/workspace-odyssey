import { globalEnvironment } from '../../../../environments/environment.prod';

export const environment = {
  production: true,
  title: 'Main Production',
  ...globalEnvironment
};
