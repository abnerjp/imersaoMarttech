export const buscaLivros = () => {
    const resposta = fetch('https://scot13.tst.marttech.com.br/api/Livro/ListarLivros');
    return resposta;
}

export const buscaDetalheLivro = async (livroId:number) => {
    const resposta = fetch(`https://scot13.tst.marttech.com.br/api/Livro/ListarDetalheLivro/${livroId}`)
    return resposta;
}