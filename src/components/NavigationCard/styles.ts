import styled, { css } from "styled-components/native";
import { ArrowUpRight } from 'phosphor-react-native';

export type NavigationCardStyledType = {
    isPositive?: boolean
}


export const NavigationCardWrapper = styled.TouchableOpacity<NavigationCardStyledType>`
    flex: 1;
    min-height: 102px;
    max-height: 102px;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme, isPositive }) => isPositive ? theme.colors.green_light : theme.colors.red_light};
    border-radius: 8px;
    padding: 20px 16px;
`;

export const NavigationCardPercentText = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.font_family.bold};
        font-size: 32px;
        color: ${theme.colors.gray_700}
    `}
`;

export const NavigationCardDescriptionText = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.font_family.regular};
        font-size: ${theme.font_size.md};
        color: ${theme.colors.gray_600}
    `}
`;

export const NavigationCardIcon = styled(ArrowUpRight)
    .attrs<NavigationCardStyledType>(({
        size: 32,
    }))`
    position: absolute;
    right: 8px;
    top: 8px;
`;