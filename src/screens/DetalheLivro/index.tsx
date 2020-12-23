/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, View, StatusBar, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { 
    Container,
    ContainerRolagem,
    ContainerInfoPrincipalLivro,
    NomeLivro,
    NomeAutor,
    ImagemLivro,
    ContainerDescricao,
    TituloDescricao,
    TextoDescricao,
    BotaoFavoritos,
    TextoFavoritos
 } from './styles';
import { buscaDetalheLivro } from '../../services/livro';

interface DetalheLivroDTO {
    id: number;
    nome: string;
    autor: string;
    imagem: string;
    descricao: string;
}

const DetalheLivro = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [
        detalheLivro, 
        setDetalheLivro
    ] = useState<DetalheLivroDTO | null>(null);

    useEffect(() => {
        const carregaDetalheLivro = async () => {
            const livroId = route.params.livroId;
            //console.log('livroId', livroId);
            const resposta = await buscaDetalheLivro(livroId);
            const json = await resposta.json();
            //console.log('buscaDetalheLivro', json);
            setDetalheLivro(json);
        };
       
        carregaDetalheLivro();
    }, []);

    if (detalheLivro === null) {
        return <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center'}} >
            <ActivityIndicator size={42} color="#023E8A" />
        </View>;
    }
    
    return (
    <>
        <StatusBar barStyle="dark-content" backgroundColor="#E7F5F8" />
        <Container>
            <ContainerRolagem>

                <ContainerInfoPrincipalLivro>
                    <View>
                        <TouchableOpacity onPress={() => { navigation.goBack(); }} >
                            <Icon name="arrow-left" size={24} color="#000" />
                        </TouchableOpacity>
                    </View>

                    <ImagemLivro source={{ uri: detalheLivro?.imagem }} resizeMode="contain" />
                    <NomeLivro> {detalheLivro?.nome} </NomeLivro>
                    <NomeAutor> {detalheLivro?.autor} </NomeAutor>
                </ContainerInfoPrincipalLivro>

                <ContainerDescricao>
                    <TituloDescricao> Descrição </TituloDescricao>
                    <TextoDescricao> {detalheLivro?.descricao} </TextoDescricao>
                </ContainerDescricao>

            </ContainerRolagem>

            <BotaoFavoritos>
                <TextoFavoritos> Adicionar aos favoritos </TextoFavoritos>
            </BotaoFavoritos>

        </Container>
    </>
    );
}

export default DetalheLivro;