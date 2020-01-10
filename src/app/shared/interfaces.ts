import {AlertType} from './components/services/alert.service';

export interface User {
  email: string;
  password: string;
}

export interface Post {
  id: string
  title: string
  text: string
  name: string
  date: Date
  img?: string


}

