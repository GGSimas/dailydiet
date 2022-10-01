import styled, { css } from "styled-components/native";


export type SelectorButtonProps = {
    isSelected: boolean;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray_400};
`

export const Header = styled.View`
    padding: 24px;
    width: 100%;
    height: 132px;
    align-items: center;
    flex-direction: row;
`;

export const HeaderTitle = styled.Text`
    margin: 0 auto;
    ${({ theme }) => css`
        font-family: ${theme.font_family.bold};
        font-size: ${theme.font_size.lg};
        color: ${theme.colors.gray_700};
    `}
`;

export const HeaderBackButton = styled.TouchableOpacity``;

export const Content = styled.View`
    flex: 1;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 24px;
`;

export const Row = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
`;

export const InputWrapper = styled.View`
    width: 150px;
`

export const Label = styled.Text`
     ${({ theme }) => css`
        font-family: ${theme.font_family.bold};
        font-size: ${theme.font_size.md};
        color: ${theme.colors.gray_700};
    `}
`;