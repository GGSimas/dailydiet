import styled from "styled-components/native";
export type AllowedMealProps = {
    isAllowed: boolean;
}
export const MealCardWrapper = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-height: 49px;
    max-height: 49px;
    margin-bottom: 10px;
    padding: 14px;

    border: 1px solid ${({ theme }) => theme.colors.gray_300};
    border-radius: 8px;

`;

export const HourLabel = styled.Text``;

export const Separator = styled.View`
    height: 100%;
    width: 50px;
    border-right-width: 1px;
    border-right-color: ${({ theme }) => theme.colors.gray_400};
`;

export const DescriptionMeal = styled.Text``;

export const AllowedMeal = styled.View<AllowedMealProps>`
    width: 14px;
    height: 14px;
    border-radius: 7px;
    background-color: ${({ theme, isAllowed }) => isAllowed ? theme.colors.green_mid : theme.colors.red_mid };
`;