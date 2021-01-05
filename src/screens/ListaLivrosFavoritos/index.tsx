import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';
import Livro from '../../components/Livro';
import { buscaLivrosFavoritos } from '../../services/livro';
import { ListaLivrosDTO } from '../ListaLivros';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import {
  Container,
  ContainerRow,
  NomeUsuario,
  Subtitulo,
  BotaoCabecalho,
  ListagemLivros,
} from './styles';

const ListaLivrosFavoritos = () => {
  const [listaDosLivrosFavoritos, setListaDosLivrosFavoritos] = useState<ListaLivrosDTO[]>([]);
  const [userBoasVindas, setUsetBoasVindas] = useState('');
  const navigation = useNavigation();

  const atualizar = async() => {
    const resposta = await buscaLivrosFavoritos();
    setListaDosLivrosFavoritos((await resposta.json()).data);
  }

  useEffect( () => {
    const carregaLivros = async () => {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      setUsetBoasVindas(storagedUser?.split('@')[0]);
      atualizar();
    };

    carregaLivros();
  }, []);

  return (
    <Container>
      <ContainerRow>
        <ContainerRow>
          <BotaoCabecalho onPress={() => { navigation.goBack(); }}>
            <Icon name="angle-left" size={24} color="#000" />
          </BotaoCabecalho>
          <NomeUsuario> Olá, <Text style={{fontWeight:'bold', textTransform:'capitalize'}}>{ userBoasVindas }</Text></NomeUsuario>
          <BotaoCabecalho onPress={atualizar}>
            <Icon name="sync-alt" size={24} color="#aaa" />
          </BotaoCabecalho>
        </ContainerRow>
      </ContainerRow>
      <Subtitulo>Seus favoritos</Subtitulo>
      <ListagemLivros
        numColumns={2}
        data={ listaDosLivrosFavoritos }
        renderItem={({item}: {item: ListaLivrosDTO}) => <Livro data={item} />}
        keyExtractor={(_, index) => {
          return 'item' + index;
        }}
      />
    </Container>
  );
};

export default ListaLivrosFavoritos;
