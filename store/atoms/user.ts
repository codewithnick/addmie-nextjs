import {atom} from "recoil";

export interface User {
    username:string
  }
  export const userState = atom<User>({
    key: 'userState',
    default: {
      username: '' 
    },
  });