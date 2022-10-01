import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import {
    NavigationCardDescriptionText,
    NavigationCardIcon,
    NavigationCardPercentText,
    NavigationCardWrapper,
    NavigationCardStyledType,
} from "./styles";


type NavigationCardProps = TouchableOpacityProps & NavigationCardStyledType & {
    title: string
}




export function NavigationCard({ title, isPositive = true, ...rest }: NavigationCardProps) {
    const theme = useTheme();

    return (
        <NavigationCardWrapper isPositive={isPositive} {...rest}>
            <NavigationCardIcon color={isPositive ? theme.colors.green_dark : theme.colors.red_dark} />
            <NavigationCardPercentText>{title}</NavigationCardPercentText>
            <NavigationCardDescriptionText>
                das refeições dentro da dieta
            </NavigationCardDescriptionText>
        </NavigationCardWrapper>
    )
}