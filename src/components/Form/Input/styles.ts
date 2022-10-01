import styled, { css } from "styled-components/native";

export const InputWrapper = styled.View`
    flex: 1;
    max-height: 70px;
    min-height: 70px;
    margin-bottom: 24px;
`;

export const Label = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.font_size.md};
        font-family: ${theme.font_family.bold};
        color: ${theme.colors.gray_700};
    `}

    margin-bottom: 4px;
`;

export const InputText = styled.TextInput`
    width: 100%;
    height: 56px;
    padding: 14px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.gray_300};
`;