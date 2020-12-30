import AsyncStorage from '@react-native-community/async-storage';

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

export const buscaLivros = async() => {
  const resposta = await fetch('https://scot13.tst.marttech.com.br/api/Livro/ListarLivros', await header());
  return resposta;
}

export const buscaDetalheLivro = async(livroId:number) => {
  const resposta = await fetch(`https://scot13.tst.marttech.com.br/api/Livro/ListarDetalheLivro/${livroId}`, await header());
  return resposta;
}