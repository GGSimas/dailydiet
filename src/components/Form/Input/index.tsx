import { TextInputProps } from "react-native";
import { InputText, InputWrapper, Label } from "./styles";

type InputProps = TextInputProps & {
    label: string;
}
export function Input({ label, ...rest }: InputProps) {
    return (
        <InputWrapper>
            <Label>{label}</Label>
            <InputText {...rest} />
        </InputWrapper>
    )
}