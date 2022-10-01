import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreatedMealAllowed } from "@screens/CreatedMealAllowed";
import { CreatedMealNotAllowed } from "@screens/CreatedMealNotAllowed";
import { Details } from "@screens/Details";
import { Home } from "@screens/Home";
import { NewMeal } from "@screens/NewMeal";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false,
        }}>
            <Screen name="home" component={Home} />
            <Screen name="details" component={Details} />
            <Screen name="newMeal" component={NewMeal} />
            <Screen name="allowedMeal" component={CreatedMealAllowed} />
            <Screen name="notAllowedMeal" component={CreatedMealNotAllowed} />
        </Navigator>
    )
}