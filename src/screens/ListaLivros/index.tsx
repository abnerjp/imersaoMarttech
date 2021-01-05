import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import Livro from '../../components/Livro';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/auth';
import { buscaLivros } from '../../services/livro';
import { Text } from 'react-native';
import {
  Container,
  ContainerCabecalho,
  ContainerConteudoCabecalho,
  NomeUsuario,
  BotaoCabecalho,
  ListagemLivros,
} from './styles';

export interface ListaLivrosDTO {
  id: number;
  nome: string;
  autor: string;
  imagem: string;
}

const ListaLivros = () => {
  const [listaDosLivros, setListaDosLivros] = useState<ListaLivrosDTO[]>([]);
  const [userBoasVindas, setUsetBoasVindas] = useState('');
  const navigation = useNavigation();
  const { signOut } =  useAuth();
  
  useEffect( () => {
    const carregaLivros = async () => {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const resposta = await buscaLivros();
      setListaDosLivros((await resposta.json()).data);
      setUsetBoasVindas(storagedUser?.split('@')[0]);
    };

    carregaLivros();
  }, []);

  function logOut() {
    signOut();
  }

  return (
    <Container>
      <ContainerCabecalho>
        <NomeUsuario> Olá, <Text style={{fontWeight:'bold', textTransform:'capitalize'}}>{userBoasVindas}</Text></NomeUsuario>
        <ContainerConteudoCabecalho>
          <BotaoCabecalho
            onPress={() => { 
              navigation.navigate('ListaLivrosFavoritos');
            }}
          >
            <Icon name="heart" size={24} color="#000" />
          </BotaoCabecalho>
          <BotaoCabecalho
            onPress={() => { 
              navigation.navigate('ListaLivrosBuscar');
            }}
          >
            <Icon name="search" size={24} color="#000" />
          </BotaoCabecalho>
          <BotaoCabecalho onPress={logOut}>
            <Icon name="sign-out" size={24} color="#000" />
          </BotaoCabecalho>
        </ContainerConteudoCabecalho>
      </ContainerCabecalho>
      <ListagemLivros
        numColumns={2}
        data={ listaDosLivros }
        renderItem={({item}: {item: ListaLivrosDTO}) => <Livro data={item} />}
        keyExtractor={(_, index) => {
          return 'item' + index;
        }}
      />
    </Container>
  );
};

export default ListaLivros;
