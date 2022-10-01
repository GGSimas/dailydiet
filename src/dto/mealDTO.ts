export type MealDTO = {
    id: string;
    name: string;
    description: string;
    date: string | Date;
    hour: string;
    isAllowed: boolean;
}