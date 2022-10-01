
import { useCallback, useMemo, useState } from 'react';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { MealDTO } from '../../dto/mealDTO';
import { Button } from "@components/Button";
import { MealCard } from '@components/MealCard';
import { NavigationCard } from "@components/NavigationCard";
import logo from "@assets/daily-diet-logo.png";
import { getAllMeal } from '@storage/AsyncStorage/get-all-meal';

import { Avatar, Container, Content, Header, Label, LogoIcon } from "./styles";
import { FlatList } from 'react-native';

interface ListItem {
    item: MealDTO;
}
const IS_GREATE_THEN_FIFTY_PERCENT = 50;
export function Home() {
    const navigator = useNavigation();
    const [meals, setMeals] = useState<MealDTO[]>([]);

    function renderMealCardItem ({ item }: ListItem) {
        return <MealCard data={item} />;
    }

    async function fetchMeals() {
        const storageMeals = await getAllMeal();

        setMeals(storageMeals);
    }

    useFocusEffect(useCallback(() => {
        fetchMeals();
    }, []));

    const mealsDetails = useMemo(() => {
        const isAllowedMeal = meals.filter(meal => meal.isAllowed).length;
        let isPositiveMeal = false;

        const percentMealAllowed = (isAllowedMeal / meals.length) * 100;
        
        if (percentMealAllowed >= IS_GREATE_THEN_FIFTY_PERCENT) {
             isPositiveMeal = true;
        }

        return {
            percentMealAllowed: percentMealAllowed.toFixed(2),
            isPositiveMeal,
        };
    }, [meals])

    function handleNavigationToDetailsScreens() {
        navigator.navigate("details");
    }

    function handleNewMeal() {
        navigator.navigate("newMeal");
    }
    return (
        <Container>
            <Header>
                <LogoIcon source={logo} />

                <Avatar source={{ uri: 'https://github.com/ggsimas.png'}} />
            </Header>

            <NavigationCard title={`${mealsDetails.percentMealAllowed} %`} isPositive={mealsDetails.isPositiveMeal} onPress={handleNavigationToDetailsScreens} />

            <Content>
                <Label>Refeições</Label>
                <Button title="Nova refeição" icon='add' onPress={handleNewMeal}/>

                <FlatList
                    data={meals}
                    keyExtractor={item => String(item.id)}
                    renderItem={renderMealCardItem}
                    showsVerticalScrollIndicator={false}
                />
            </Content>
            
        </Container>
    )
}