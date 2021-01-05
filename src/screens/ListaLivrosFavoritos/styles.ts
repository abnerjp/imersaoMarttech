
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #fff;
    flex: 1;
    padding: 16px;
`;

export const ContainerRow = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const NomeUsuario = styled.Text`
    flex: 1;
    font-size: 24px;
`;

export const Subtitulo = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 18px;
  margin-bottom: 32px;
`;

export const BotaoCabecalho = styled.TouchableOpacity`
    height: 24px;
    width: 24px;
    justify-content: center;
`;

export const ListagemLivros = styled.FlatList`
    flex: 1;
`;