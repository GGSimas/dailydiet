import { TextInputProps } from "react-native";
import { Label, TextAreaInput, TextAreaWrapper } from "./styles";

type TextAreaProps = TextInputProps & {
    label: string;
}
export function TextArea({label, ...rest}: TextAreaProps) {
    return (
        <TextAreaWrapper>
            <Label>{label}</Label>
            <TextAreaInput multiline {...rest} />
        </TextAreaWrapper>
    )
}