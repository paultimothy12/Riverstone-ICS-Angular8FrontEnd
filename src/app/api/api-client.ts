import axios from 'axios';
import {HttpClient} from '@angular/common/http';

// @ts-ignore
export const apiClient = axios.create({
  baseURL: 'http://localhost:8080'
});
