import AsyncStorage from '@react-native-async-storage/async-storage';
import { MealDTO } from '../../dto/mealDTO';
import { ASYNC_STORAGE_COLLECTION } from './key-collections';

export async function getAllMeal(): Promise<Array<MealDTO>> {
    try {
        const storage = await AsyncStorage.getItem(ASYNC_STORAGE_COLLECTION.meal);
    
        const meals: MealDTO[] = storage ? JSON.parse(storage) : [];
    
        return meals;
    } catch(error) {
        throw error;
    }
} 