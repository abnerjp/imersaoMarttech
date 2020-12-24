import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Image, TouchableOpacity} from 'react-native';
import {
  Container, 
  ContainerLogo, 
  ContainerFormulario,
  ContainerTextInput,
  FieldText,
  BotaoLogin,
  TextoLogin,
  BotaoCadastro,
  TextoCadastro
} from './styles';

const LoginApp = () => {
  const [isPassVisible, setPassVisible] = useState(false);
  const onPressEye = () => setPassVisible (!isPassVisible);

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
          <FieldText placeholder="seu@email.com"></FieldText>
        </ContainerTextInput>
        <ContainerTextInput>
          <FieldText placeholder="sua.senha"  secureTextEntry={ !isPassVisible } textContentType="password"></FieldText>
          <TouchableOpacity onPress={onPressEye}>
            <Icon name={ !isPassVisible ? "eye" : "eye-slash" } size={24} color="#000" style={{ paddingTop: 10, paddingRight: 5}} />
          </TouchableOpacity>
        </ContainerTextInput>
        <BotaoLogin>
          <TextoLogin> Login </TextoLogin>
        </BotaoLogin>
        <BotaoCadastro>
          <TextoCadastro> Cadastre-se </TextoCadastro>
        </BotaoCadastro>
      </ContainerFormulario>
    </Container>
  );
};
export default LoginApp;
