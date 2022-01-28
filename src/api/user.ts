import axios from 'axios';
import { UserState } from '@/store/modules/user/types';

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginRes {
  token: string;
}

const URL = '/api/system/user';

export function login(data: LoginData) {
  return axios.post<LoginRes>(`${URL}/login`, data);
}

export function logout() {
  return axios.post<LoginRes>(`${URL}/logout`);
}

export function getUserInfo() {
  return axios.post<UserState>(`${URL}/info`);
}
