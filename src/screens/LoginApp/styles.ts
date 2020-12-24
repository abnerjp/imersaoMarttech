import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #FFFFFF;
    flex: 1;
    padding: 16px;
`;

export const ContainerLogo = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const ContainerFormulario = styled.View`
    display: flex;
    justify-content: flex-end;
`;

export const ContainerTexto = styled.View`
    flex-direction: row;
    
    height: 56px;
    padding-top: 10px;
    
    border-bottom-width: 3px;
    border-bottom-color: #023E8A;
    margin-bottom: 16px;
`;

export const Email = styled.TextInput`
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

export const BotaoCadastro = styled.TouchableOpacity`
    margin-bottom: 26px;
    height: 56px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

export const TextoCadastro = styled.Text`
    font-size: 16px;
    color: #023E8A;
    font-weight: bold;
`;
