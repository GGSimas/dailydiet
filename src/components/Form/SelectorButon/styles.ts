import { ColorValue } from 'react-native';
import styled, { css } from 'styled-components/native';

export type SelectorButtonStyleProps = {
    isSelected: boolean;
    color: ColorValue;
};

export const SelectorButtonWrapper = styled.TouchableOpacity<SelectorButtonStyleProps>`
    background-color: ${({ theme }) => theme.colors.gray_200};
    width: 160px;
    height: 50px;

    border-radius: 6px;
    align-items: center;
    justify-content: center;
    ${({ isSelected, color }) => isSelected && css`
        background-color: ${color};
        border: 1px solid ${color};
    `}
`;

export const SelectorButtonText = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.font_family.bold};
        font-size: ${theme.font_size.md};
        color: ${theme.colors.gray_700};
    `}
`;
