import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity, View, StatusBar, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { buscaDetalheLivro, buscaLivrosFavoritos, favoritarLivro, desfavoritarLivro } from '../../services/livro';
import { 
  Container,
  ContainerRolagem,
  ContainerInfoPrincipalLivro,
  NomeLivro,
  NomeAutor,
  ImagemLivro,
  ContainerDescricao,
  TituloDescricao,
  TextoDescricao,
  BotaoFavoritos,
  TextoFavoritos,
} from './styles';

interface DetalheLivroDTO {
  id: number;
  nome: string;
  autor: string;
  imagem: string;
  descricao: string;
}

const DetalheLivro = () => {
  const [detalheLivro, setDetalheLivro] = useState<DetalheLivroDTO | null>(null);
  const navigation = useNavigation();
  const route = useRoute();
  const [isFavorito, setIsFavorito] = useState(false);

  useEffect(() => {
    const carregaDetalheLivro = async () => {
      const livroId = route.params.livroId;

      /* 
        carrega a lista de livros favoritos, para verificar se livro detalhado é um favorito 
        nao é a melhor maneira de verificar se 1 livro é favorito, mas foi a forma encontrada
      */
      const respostaFavoritos = await buscaLivrosFavoritos();
      const retorno = await respostaFavoritos.json();
      var favorito = false;
      try {
        for (var i = 0; i < retorno?.data.length && !favorito; i++) {
          favorito = retorno.data[i].id == livroId; 
        }
      }
      catch {
        console.log('erro');
        favorito = false;
      }
      setIsFavorito(favorito);

      const resposta = await buscaDetalheLivro(livroId);
      setDetalheLivro((await resposta.json()).data);
    };
    
    carregaDetalheLivro();
  }, []);

  const clickedFavorite = async() => {
    if (!!detalheLivro) {
      var resp = null;
      if (isFavorito)  {
        resp = await desfavoritarLivro(detalheLivro.id);
      } 
      else {
        resp = await favoritarLivro(detalheLivro.id);
      }
      if (!!resp) {
        setIsFavorito(!isFavorito);
      }
    }
  }

  if (detalheLivro === null) {
    return <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center'}} >
      <ActivityIndicator size={42} color="#023E8A" />
    </View>;
  }
  
  return (
  <>
      <StatusBar barStyle="dark-content" backgroundColor="#E7F5F8" />
      <Container>
          <ContainerRolagem>
            <ContainerInfoPrincipalLivro>
              <View>
                <TouchableOpacity onPress={() => { navigation.goBack(); }} >
                  <Icon name="angle-left" size={24} color="#000" />
                </TouchableOpacity>
              </View>
              <ImagemLivro source={{ uri: detalheLivro?.imagem }} resizeMode="contain" />
              <NomeLivro> {detalheLivro?.nome} </NomeLivro>
              <NomeAutor> {detalheLivro?.autor} </NomeAutor>
            </ContainerInfoPrincipalLivro>
            <ContainerDescricao>
              <TituloDescricao> Descrição </TituloDescricao>
              <TextoDescricao> {detalheLivro?.descricao} </TextoDescricao>
            </ContainerDescricao>
          </ContainerRolagem>
        <BotaoFavoritos 
          style={ isFavorito ? { backgroundColor: '#E6E6E6'} : {}}
          onPress={clickedFavorite}
        >
          <TextoFavoritos 
            style={ isFavorito ? { color: '#000000'} : {}}
          > 
            {isFavorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          </TextoFavoritos>
        </BotaoFavoritos>
      </Container>
  </>
  );
}

export default DetalheLivro;