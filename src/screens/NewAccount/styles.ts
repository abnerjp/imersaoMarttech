import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #FFFFFF;
  padding: 16px;
`;

export const ContainerLogo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerFormulario = styled.View`
  justify-content: flex-end;
`;

export const ContainerTextInput = styled.View`
  height: 56px;
  padding-top: 10px;
  border-bottom-width: 3px;
  border-bottom-color: #023E8A;
  margin-bottom: 16px;
`;

export const FieldText = styled.TextInput`
  font-size: 16px;
  flex-grow: 1;
`;

export const BotaoLogin = styled.TouchableOpacity`
  background-color: #023E8A;
  margin-bottom: 16px;
  height: 56px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const TextoLogin = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;