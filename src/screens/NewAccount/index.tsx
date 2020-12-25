import React from 'react';
import { Image} from 'react-native';
import {
  Container, 
  ContainerLogo, 
  ContainerFormulario,
  ContainerTextInput,
  FieldText,
  BotaoLogin,
  TextoLogin,
} from './styles';

const NewAccount = () => {
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
          <FieldText placeholder="seu nome"></FieldText>
        </ContainerTextInput>
        <ContainerTextInput>
          <FieldText placeholder="seu@email.com"></FieldText>
        </ContainerTextInput>
        <ContainerTextInput>
          <FieldText placeholder="sua.senha"  secureTextEntry={ true } textContentType="password"></FieldText>
        </ContainerTextInput>
        <ContainerTextInput>
          <FieldText placeholder="confirmar senha"  secureTextEntry={ true } textContentType="password"></FieldText>
        </ContainerTextInput>
        <BotaoLogin>
          <TextoLogin> Registrar </TextoLogin>
        </BotaoLogin>
      </ContainerFormulario>
    </Container>
  );
};
export default NewAccount;
