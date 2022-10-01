import { useEffect, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { 
    Container,
    BackButtonContainer, 
    Description, 
    Heading, 
    PercentText, 
    Content, 
    StatisticsTitle, 
    DetailCard,
    CardTitle,
    CardDescription,
    CardDetailsRowWrapper,
    MealCard,
} from "./styles";
import { getAllMeal } from "@storage/AsyncStorage/get-all-meal";
import { MealDTO } from "src/dto/mealDTO";

export function Details() {
    const navigator = useNavigation();
    const theme = useTheme();
    const [meals, setMeals] = useState<MealDTO[]>([]);

    function handleBackHome() {
        navigator.goBack();
    }

    async function fetchMeal() {
        const storaged = await getAllMeal();
        setMeals(storaged);
    }

    useEffect(() => {
        fetchMeal();
    }, []);

   const mealsDetails = useMemo(() => {
    const isAllowedMeal = meals.filter(meal => meal.isAllowed).length;
    const isNotAllowedMeal = meals.filter(meal => !meal.isAllowed).length;
    
    const calculatedPercentage = (isAllowedMeal / meals.length) * 100;

    return {
        isAllowedMeal,
        isNotAllowedMeal,
        calculatedPercentage,
    }
   }, [meals])

    return (
        <Container isMealInDiet={true}>
            <BackButtonContainer onPress={handleBackHome} >
                <ArrowLeft color={true ? theme.colors.green_dark : theme.colors.red_dark} />
            </BackButtonContainer>
            <Heading>
                <PercentText>{mealsDetails.calculatedPercentage} %</PercentText>
                <Description>das refeições dentro da dieta</Description>
            </Heading>
            <Content>
                <StatisticsTitle>Estátiscas gerais</StatisticsTitle>

                <DetailCard>
                    <CardTitle>{mealsDetails.isAllowedMeal}</CardTitle>
                    <CardDescription>melhor sequência de pratos dentro da dieta</CardDescription>
                </DetailCard>

                <DetailCard>
                    <CardTitle>{meals.length}</CardTitle>
                    <CardDescription>refeições registradas</CardDescription>
                </DetailCard>

                <CardDetailsRowWrapper>
                    <MealCard isPositive>
                        <CardTitle>{mealsDetails.isAllowedMeal}</CardTitle>
                        <CardDescription>refeições dentro da dieta</CardDescription>
                    </MealCard>

                    <MealCard>
                        <CardTitle>{mealsDetails.isNotAllowedMeal}</CardTitle>
                        <CardDescription>refeições fora da dieta</CardDescription>
                    </MealCard>
                </CardDetailsRowWrapper>
            </Content>
        </Container>
    )
}