import { initialWindowMetrics } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type DetailsScreenContainer = {
    isMealInDiet?: boolean;
}

type MealCardProps = {
    isPositive: boolean;
}
export const Container = styled.View<DetailsScreenContainer>`
    flex: 1;
    ${({ theme, isMealInDiet }) => css`
        background-color: ${isMealInDiet ? theme.colors.green_mid : theme.colors.red_mid};
    `};
`;

export const BackButtonContainer = styled.TouchableOpacity`
    width: 100%;
    margin-top: ${initialWindowMetrics?.insets.top}px;
    margin-left: 24px;
`;

export const Heading = styled.View`
    width: 100%;
    height: 100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PercentText = styled.Text`
    font-size: 32px;

    ${({ theme }) => css`
        font-family: ${theme.font_family.bold};
        color: ${theme.colors.gray_700};
    `}
`;

export const Description = styled.Text`
      ${({ theme }) => css`
        font-size: ${theme.font_size.md};
        font-family: ${theme.font_family.bold};
        color: ${theme.colors.gray_700};
    `}
`;

export const Content = styled.View`
    flex: 1;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.white};
    align-items: center;
    padding: 24px;
`;

export const StatisticsTitle = styled.Text`
  ${({ theme }) => css`
        font-size: ${theme.font_size.md};
        font-family: ${theme.font_family.bold};
        color: ${theme.colors.gray_700};
    `}
    margin-bottom: 23px;
`;

export const DetailCard = styled.View`
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 89px;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.gray_300};
    margin-bottom: 12px;
`;

export const CardTitle = styled.Text`
  font-size: 24px;
  text-align: center;
  ${({ theme }) => css`
        font-family: ${theme.font_family.bold};
        color: ${theme.colors.gray_700};
    `}
`
export const CardDescription = styled.Text`
  text-align: center;
  ${({ theme }) => css`
        font-size: ${theme.font_size.md};
        font-family: ${theme.font_family.regular};
        color: ${theme.colors.gray_700};
    `}
`

export const CardDetailsRowWrapper = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const MealCard = styled.View<MealCardProps>`
    width: 157px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 107px;
    border-radius: 8px;
    padding: 16px;

    background-color: ${({ theme, isPositive }) => isPositive ? theme.colors.green_light : theme.colors.red_light};
    margin-bottom: 12px;
`;
