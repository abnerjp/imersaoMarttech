import AsyncStorage from '@react-native-community/async-storage';
import { baseUrl } from './auth';

async function header() {
  const storagedToken = await AsyncStorage.getItem('@RNAuth:token');
  return {
    method: 'GET',
    headers: { 
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + storagedToken,
    },
  };
}

export const buscaLivros = async(filtro = '') => {
  const resposta = await fetch(`${baseUrl}api/Livro/ListarLivros?filtro=${filtro}`, await header());
  return resposta;
}

export const buscaDetalheLivro = async(livroId:number) => {
  const resposta = await fetch(`${baseUrl}api/Livro/ListarDetalheLivro/${livroId}`, await header());
  return resposta;
}

export const buscaLivrosFavoritos = async() => {
  const resposta = await fetch(`${baseUrl}api/Favorito/ListarLivrosFavoritados`, await header());
  return resposta;
}

export const favoritarLivro = async(livroId:number) => {
  const resposta = await fetch(`${baseUrl}api/Favorito/FavoritarLivro/${livroId}`, await header());
  return resposta;
}

export const desfavoritarLivro = async(livroId:number) => {
  const resposta = await fetch(`${baseUrl}api/Favorito/DesfavoritarLivro/${livroId}`, await header());
  return resposta;
}