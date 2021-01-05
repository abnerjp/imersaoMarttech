import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #fff;
    flex: 1;
    padding: 16px;
`;

export const ContainerCabecalho = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 56px;
    margin-bottom: 16px;
`;

export const ContainerConteudoCabecalho = styled.View`
    flex-direction: row;
`;

export const NomeUsuario = styled.Text`
    flex: 1;
    font-size: 24px;
`;

export const BotaoCabecalho = styled.TouchableOpacity`
    height: 42px;
    width: 42px;
    align-items: center;
    justify-content: center;
`;

export const ListagemLivros = styled.FlatList`
    flex: 1;
`;