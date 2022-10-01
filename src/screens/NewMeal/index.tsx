import { useState } from "react";
import uuid from "react-native-uuid";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

import { Button } from "@components/Button";
import { Input, TextArea, SelectorButton } from "@components/Form";
import { Container, Content, Header, HeaderBackButton, HeaderTitle, Row, InputWrapper, Label } from "./styles";
import { createMeal } from "@storage/AsyncStorage/create-meal";
import { Alert } from "react-native";

export function NewMeal() {
    const theme = useTheme();
    const navigator = useNavigation();
    const [isSelectedButton, setIsSelectedButton] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');

    function handleSelectedButton(buttonTitle: string) {
        setIsSelectedButton(buttonTitle);
    }

    async function handleCreateNewMeal() {
        try {
            const data = {
                id: String(uuid.v4()),
                name,
                description,
                date,
                hour,
                isAllowed: isSelectedButton === 'Sim' ? true : false,
            };
    
            await createMeal(data);

            if (isSelectedButton === 'Sim') {
                navigator.navigate('allowedMeal');
            } else {
                navigator.navigate('notAllowedMeal');
            }
        } catch (error) {
            Alert.alert('Criar refeição','Houve um erro ao tentar criar a refeição, tente novamente mais tarde!');
        }
    }

    function handleBackHome() {
        navigator.goBack();
    }

    return (
        <Container>
            <Header>
                <HeaderBackButton onPress={handleBackHome}>
                    <ArrowLeft />
                </HeaderBackButton>
                <HeaderTitle>Nova refeição</HeaderTitle>
            </Header>
            <Content>
                <Input label="Nome" onChangeText={setName}/>
                <TextArea  label="Descrição" onChangeText={setDescription}/>

                <Row>
                    <InputWrapper>
                        <Input label="Data" onChangeText={setDate} />
                    </InputWrapper>
                    <InputWrapper>
                        <Input label="Hora" onChangeText={setHour} />
                    </InputWrapper>
                </Row>

                <Label>Está dentro da dieta?</Label>
                <Row>
                    <SelectorButton title="Sim" color={theme.colors.green_mid} isSelected={isSelectedButton === 'Sim'} onPress={() => handleSelectedButton("Sim")}/>
                    <SelectorButton title="Não" color={theme.colors.red_mid} isSelected={isSelectedButton === 'Não'} onPress={() => handleSelectedButton("Não")}/>
                </Row>

                <Button title="Cadastrar refeição" onPress={handleCreateNewMeal}/>
            </Content>
        </Container>
    )
}