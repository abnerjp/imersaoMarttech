import React, {useContext, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import Livro from '../../components/Livro';
import { useAuth } from '../../contexts/auth';
import { buscaLivrosFavoritos } from '../../services/livro';
import { ListaLivrosDTO } from '../ListaLivros';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  ContainerRow,
  NomeUsuario,
  Subtitulo,
  BotaoCabecalho,
  ListagemLivros,
} from './styles';
import { Text } from 'react-native';


const ListaLivrosFavoritos = () => {
  const [listaDosLivrosFavoritos, setListaDosLivrosFavoritos] = useState<ListaLivrosDTO[]>([]);
  const [userBoasVindas, setUsetBoasVindas] = useState('');
  const navigation = useNavigation();

  useEffect( () => {
    const carregaLivros = async () => {
        const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
        const resposta = await buscaLivrosFavoritos();
        setListaDosLivrosFavoritos((await resposta.json()).data);
        setUsetBoasVindas(storagedUser?.split('@')[0]);
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
        </ContainerRow>
        <NomeUsuario> Olá, <Text style={{fontWeight:'bold', textTransform:'capitalize'}}>{ userBoasVindas }</Text></NomeUsuario>
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
