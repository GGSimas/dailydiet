import styled, { css } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';

export type ButtonStyledType = 'primary' | 'secondary';

type ButtonProps = {
    type?: ButtonStyledType;
}
export const ButtonWrapper = styled.TouchableOpacity<ButtonProps>`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    max-height: 52px;
    min-height: 52px;
    padding: 16px 24px;
    border-radius: 8px;
    margin-bottom: 32px;
    ${({ theme, type }) => css`
       background-color: ${type === 'primary' ? theme.colors.gray_600 : 'transparent'};
       border-width: ${type === 'secondary' && 1}px;
       border-color: ${type === 'secondary' && theme.colors.gray_600};
    `}
`;

export const ButtonIcon = styled(MaterialIcons).attrs<ButtonProps>(({theme, type }) => ({
    color: type === 'primary' ? theme.colors.white: theme.colors.gray_600,
    size: 18,
}))`
    margin-right: 12px;
`;

export const ButtonText = styled.Text<ButtonProps>`
    ${({ theme, type }) => css`
        font-size: ${theme.font_size.md};
        font-family: ${theme.font_family.regular};
        color: ${type === 'primary' ? theme.colors.white : theme.colors.gray_600};
    `}
`