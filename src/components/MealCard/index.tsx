import { MealDTO } from "../../dto/mealDTO";
import { 
    MealCardWrapper,
    DescriptionMeal,
    AllowedMeal,
    HourLabel,
    Separator
} from "./styles";



type MealCardProps = {
    data: MealDTO;
}

export function MealCard({ data }: MealCardProps) {
    return (
        <MealCardWrapper>
            <Separator>
                <HourLabel>{data.hour}</HourLabel>
            </Separator>
            <DescriptionMeal>{data.name}</DescriptionMeal>
            <AllowedMeal isAllowed={data.isAllowed}/>
        </MealCardWrapper>
    )
}