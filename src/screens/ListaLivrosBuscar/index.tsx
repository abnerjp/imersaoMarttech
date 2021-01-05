import React, { useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Livro from '../../components/Livro';
import { buscaLivros } from '../../services/livro';
import { ListaLivrosDTO } from '../ListaLivros';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  ContainerRow,
  FieldText,
  Subtitulo,
  BotaoCabecalho,
  ListagemLivros,
} from './styles';

const ListaLivrosBuscar = () => {
  const [listaDosLivros, setListaDosLivros] = useState<ListaLivrosDTO[]>([]);
  const [valorPesquisa, setValorPesquisa] = useState('');
  const navigation = useNavigation();

  useEffect( () => {
    const carregaLivros = async () => {
      const resposta = await buscaLivros();
      setListaDosLivros((await resposta.json()).data);
    };
    carregaLivros();
  }, []);

  const filtrar = async (filtro:string) => {
    // para grandes volumes de dados é mais performático chamar essa função somente no evento do botão de pesquisa.
    const resposta = await buscaLivros(filtro);
    setListaDosLivros((await resposta.json()).data);
  }

  return (
    <Container>
      <ContainerRow>
        <BotaoCabecalho onPress={() => { navigation.goBack(); }}>
          <Icon name="angle-left" size={24} color="#000" />
        </BotaoCabecalho>
        <FieldText 
          placeholder="buscar"
          onChangeText={(valor) => { setValorPesquisa(valor); filtrar(valor); }}
        ></FieldText>
        <BotaoCabecalho onPress={() => {filtrar(valorPesquisa);}}>
            <Icon name="search" size={24} color="#000" />
        </BotaoCabecalho>
      </ContainerRow>
      <Subtitulo>Seus resultados</Subtitulo>
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

export default ListaLivrosBuscar;
