import AsyncStorage from '@react-native-community/async-storage';

export const buscaLivros = async() => {
  const storagedToken = await AsyncStorage.getItem('@RNAuth:token');
  const requestOptions = {
    method: 'GET',
    headers: { 
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + storagedToken,
    },
  };
  const resposta = await fetch('https://scot13.tst.marttech.com.br/api/Livro/ListarLivros', requestOptions);
  return resposta;
}

export const buscaDetalheLivro = async (livroId:number) => {
    const resposta = fetch(`https://scot13.tst.marttech.com.br/api/Livro/ListarDetalheLivro/${livroId}`)
    return resposta;
}