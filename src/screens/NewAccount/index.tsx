import React, { useState } from 'react';
import { Image, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ResponseUser } from '../../services/auth';
import { addNewUser } from '../../services/sign.up';
import {
  Container, 
  ContainerLogo, 
  ContainerFormulario,
  ContainerTextInput,
  FieldText,
  BotaoLogin,
  TextoLogin,
} from './styles';

export interface NewUser {
  nome: string;
  email: string;
  senha: string;
}

const NewAccount = () => {
  const navigation = useNavigation();  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [resNewUser, setResNewUser] = useState<ResponseUser>({} as ResponseUser);

  const onPressRegister = async() => {
    if (nome === '' || email === '' || pass === '' || pass != confirmPass || pass.length < 6) {
      console.log('algo deu errado');
      return false;
    }
    
    const valor = { 'nome': nome, 'email': email,'senha': pass };
    const resposta = await (await addNewUser(valor)).json();
    setResNewUser(resposta);
    if (resposta.success) {
      console.log('usuario criado com sucesso');
      Keyboard.dismiss();
      navigation.goBack();
    }
    console.log(resposta); 
  }

  return (
    <Container>
      <ContainerLogo>
        <Image
          source={require('../../assets/logo.jpg')}
          resizeMode="cover"
        />
      </ContainerLogo>

      <ContainerFormulario>
        <ContainerTextInput>
          <FieldText 
            placeholder="seu nome"
            onChangeText={(valor) => { setNome(valor); }}
          ></FieldText>
        </ContainerTextInput>
        <ContainerTextInput>
          <FieldText 
            placeholder="seu@email.com" 
            textContentType="emailAddress"
            onChangeText={(valor) => { setEmail(valor); }}
          ></FieldText>
        </ContainerTextInput>
        <ContainerTextInput>
          <FieldText 
            placeholder="sua.senha" 
            secureTextEntry={ true } 
            textContentType="password"
            onChangeText={(valor) => { setPass(valor); }}
          ></FieldText>
        </ContainerTextInput>
        <ContainerTextInput>
          <FieldText 
            placeholder="confirmar senha"  
            secureTextEntry={ true } 
            textContentType="password"
            onChangeText={(valor) => { setConfirmPass(valor); }}
          ></FieldText>
        </ContainerTextInput>
        <BotaoLogin onPress={onPressRegister} >
          <TextoLogin> Registrar </TextoLogin>
        </BotaoLogin>
      </ContainerFormulario>
    </Container>
  );
};

export default NewAccount;
