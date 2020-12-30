import React, {useContext, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import Livro from '../../components/Livro';
import { useAuth } from '../../contexts/auth';
import {buscaLivros} from '../../services/livro';
import {
  Container,
  ContainerRow,
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
  const { signOut } =  useAuth();

  useEffect( () => {
    const carregaLivros = async () => {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const resposta = await buscaLivros();
      console.log(storagedUser?.toString());
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
      <ContainerRow>
        <NomeUsuario> Olá, {userBoasVindas} </NomeUsuario>
        <ContainerRow>
          <BotaoCabecalho>
            <Icon name="heart" size={24} color="#000" />
          </BotaoCabecalho>
          <BotaoCabecalho>
            <Icon name="search" size={24} color="#000" />
          </BotaoCabecalho>
          <BotaoCabecalho onPress={logOut}>
            <Icon name="sign-out" size={24} color="#000" />
          </BotaoCabecalho>
        </ContainerRow>
      </ContainerRow>
      <ListagemLivros
        numColumns={2}
        data={listaDosLivros}
        renderItem={({item}: {item: ListaLivrosDTO}) => <Livro data={item} />}
        keyExtractor={(_, index) => {
          return 'item' + index;
        }}
      />
    </Container>
  );
};

export default ListaLivros;
