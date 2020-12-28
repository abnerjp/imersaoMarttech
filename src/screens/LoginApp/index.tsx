import React, { useState, useContext } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useAuth } from '../../contexts/auth';
import { Image, Keyboard, TouchableOpacity} from 'react-native';
import {
  Container, 
  ContainerLogo, 
  ContainerFormulario,
  ContainerTextInput,
  FieldText,
  BotaoLogin,
  TextoLogin,
  BotaoCadastro,
  TextoCadastro,
} from './styles';
import { useNavigation } from '@react-navigation/native';

const LoginApp = () => {
  const navigation = useNavigation();
  const {signed, signIn} = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isPassVisible, setPassVisible] = useState(false);
  const onPressEye = () => setPassVisible (!isPassVisible);

  function onPressLogin() {
    if (email === '' || senha === '') {
      console.log('campos vazios');
      return false;
    }
    Keyboard.dismiss();

    signIn({'email': email, 'senha': senha });
    if (signed) {
      navigation.navigate('ListaLivros');
    } 
    else {
      console.log('não foi possível fazer o login');
    }
  }

  const onPressCadastro = () => {
    setEmail('');
    setSenha('');
    navigation.navigate('NewAccount');
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
            value={email}
            placeholder="seu@email.com"
            onChangeText={(valor) => { setEmail(valor); }}
          ></FieldText>
        </ContainerTextInput>
        <ContainerTextInput>
          <FieldText 
            value={senha}
            placeholder="sua.senha" 
            secureTextEntry={ !isPassVisible } 
            textContentType="password"
            onChangeText={(valor) => { setSenha(valor); }}
          ></FieldText>
          <TouchableOpacity onPress={onPressEye}>
            <Icon name={ !isPassVisible ? "eye" : "eye-slash" } size={24} color="#000" style={{ paddingTop: 10, paddingRight: 5}} />
          </TouchableOpacity>
        </ContainerTextInput>
        <BotaoLogin onPress={onPressLogin}>
          <TextoLogin> Login </TextoLogin>
        </BotaoLogin>
        <BotaoCadastro onPress={() => {onPressCadastro()}}>
          <TextoCadastro> Cadastre-se </TextoCadastro>
        </BotaoCadastro>
      </ContainerFormulario>
    </Container>
  );
};

export default LoginApp;
