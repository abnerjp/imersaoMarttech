import styled from 'styled-components/native';



export const Container = styled.View`
    flex: 1;
    background-color: #fff;
`;

export const ContainerRolagem = styled.ScrollView`
    flex: 1;
`;

export const ContainerInfoPrincipalLivro = styled.ScrollView`
    background-color: #E7F5F8;
    padding: 16px;
`;

export const NomeLivro = styled.Text`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #000;
    margin-bottom: 6px;
`;

export const NomeAutor = styled.Text`
    text-align: center;
    font-size: 16px;
    color: #AAAAAA;
    margin-bottom: 16px;
`;

export const ImagemLivro = styled.Image`
    height: 256px;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 10px;
`;


export const ContainerDescricao = styled.ScrollView`
    padding: 16px;
    margin-top: 2px;
`;

export const TituloDescricao = styled.Text`
    font-size: 16px;
    color: #000;
    font-weight: bold;
    margin-bottom: 8px;
`;

export const TextoDescricao = styled.Text`
    font-size: 16px;
    color: #AAAAAA;
    line-height: 19px;
`;

export const BotaoFavoritos = styled.TouchableOpacity`
    background-color: #023E8A;
    height: 56px;
    border-radius: 8px;
    margin: 16px;
    align-items: center;
    justify-content: center;
`;

export const TextoFavoritos = styled.Text`
    font-size: 16px;
    color: #fff;
    font-weight: bold;
`;