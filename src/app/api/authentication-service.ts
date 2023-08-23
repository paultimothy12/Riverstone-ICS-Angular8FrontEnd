import {apiClient} from './api-client';

export const executeJwtAuthenticationService = (
  username: string,
  password: string) => {
  const requestBody = {username, password};
  return apiClient.post('/authenticate', requestBody);
};
