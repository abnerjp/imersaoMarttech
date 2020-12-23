import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Livro from '../../components/Livro';
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

  useEffect(() => {
    const carregaLivros = async () => {
      const resposta = await buscaLivros();
      const json = await resposta.json();
      //console.log('resposta', json);
      setListaDosLivros(json);
    };

    carregaLivros();
  }, []);

  return (
    <Container>
      <ContainerRow>
        <NomeUsuario> Olá, Abner </NomeUsuario>
        <ContainerRow>
          <BotaoCabecalho>
            <Icon name="heart" size={24} color="#000" />
          </BotaoCabecalho>
          <BotaoCabecalho>
            <Icon name="search" size={24} color="#000" />
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
