import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ListaLivrosDTO } from '../../screens/ListaLivros';
import { 
  ContainerBotao, 
  LivroImagem, 
  NomeLivro, 
  NomeAutor 
} from './styles';

interface ListaProps {
  data: ListaLivrosDTO;
}

const Livro = (props: ListaProps) => {
  const navigation = useNavigation();

  return (
    <ContainerBotao onPress={() => { 
        navigation.navigate('DetalheLivro', {
        livroId: props.data.id
      });
    }}>
      <LivroImagem resizeMode="cover" source={{ uri: props.data.imagem }}/>
      <NomeLivro> {props.data.nome} </NomeLivro>
      <NomeAutor> {props.data.autor} </NomeAutor>
    </ContainerBotao>
  )
};

export default Livro;
