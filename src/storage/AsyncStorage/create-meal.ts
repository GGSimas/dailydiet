import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealDTO } from "src/dto/mealDTO";
import { getAllMeal } from "./get-all-meal";
import { ASYNC_STORAGE_COLLECTION } from "./key-collections";

export async function createMeal(meal: MealDTO): Promise<void> {
    try {
        const storageMeals = await getAllMeal();
        const data = [...storageMeals, meal];
        await AsyncStorage.setItem(ASYNC_STORAGE_COLLECTION.meal, JSON.stringify(data))
    } catch(error) {
        throw error;
    }
    
}