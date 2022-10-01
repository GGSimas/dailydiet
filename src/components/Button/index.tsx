import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { ButtonText, ButtonWrapper, ButtonIcon, ButtonStyledType } from "./styles";


type ButtonProps = TouchableOpacityProps & {
    title: string;
    icon?: keyof typeof MaterialIcons.glyphMap;
    type?: ButtonStyledType
}

export function Button({ title, icon, type = "primary", ...rest}: ButtonProps) {
    return (
        <ButtonWrapper type={type} {...rest}>
            {icon && <ButtonIcon type={type} name={icon} />}
            <ButtonText type={type}>{title}</ButtonText>
        </ButtonWrapper>
    )
}