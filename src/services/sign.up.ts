import  { NewUser } from '../screens/NewAccount/index';

export const addNewUser1 = async (user:NewUser) => {
  const requestOptions = {
    method: 'POST',
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  
  fetch(`https://scot13.tst.marttech.com.br/api/User/CriarConta`, requestOptions)
    .then((response) => response.text())
    .then((responseText) => {
      console.log('retorno: '+responseText);
      return JSON.parse(responseText);
    })
    .catch((error) => {
      console.log('erro: ' + error);
      return error;
    });
}

export async function addNewUser(user: NewUser) {
  const requestOptions = {
    method: 'POST',
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  
  const response = await fetch(`https://scot13.tst.marttech.com.br/api/User/CriarConta`, requestOptions);
  return response;
}