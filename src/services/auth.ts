export const baseUrl = 'https://scot13.tst.marttech.com.br/';

export interface FazerLogin {
  email: string;
  senha: string;
}

export interface ResponseUser {
  success: boolean;
  message: string;
  erroDetails: string;
  isError: boolean;
  data: { token: string; };
}

export const login = async(user: FazerLogin) =>{
  const requestOptions = {
    method: 'POST',
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  const response =  await fetch(`${baseUrl}api/User/FazerLogin`, requestOptions);
  const res = await response.text();
  return res;
}