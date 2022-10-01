import { TouchableOpacityProps } from "react-native"
import { SelectorButtonWrapper, SelectorButtonStyleProps, SelectorButtonText } from "./styles"

type SelectorButtonProps = TouchableOpacityProps & SelectorButtonStyleProps & {
    title: string
}
export function SelectorButton({title, color, isSelected, ...rest }: SelectorButtonProps) {
    return (
        <SelectorButtonWrapper color={color} isSelected={isSelected} {...rest}>
            <SelectorButtonText>{title}</SelectorButtonText>
        </SelectorButtonWrapper>
    )
}