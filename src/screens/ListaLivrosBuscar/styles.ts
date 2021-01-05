import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #fff;
    flex: 1;
    padding: 16px;
`;

export const ContainerRow = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 18px;
    justify-content: center;
`;

export const FieldText = styled.TextInput`
  border-bottom-width: 3px;
  border-color: #023E8A;
  font-size: 16px;
  flex-grow: 1;
  margin-left: 16px;
  margin-right: 16px;
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