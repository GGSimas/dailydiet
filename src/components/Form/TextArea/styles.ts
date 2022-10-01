import styled, { css } from "styled-components/native";

export const TextAreaWrapper = styled.View`
    width: 100%;
    margin-bottom: 50px;
`;

export const Label = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.font_size.md};
        font-family: ${theme.font_family.bold};
        color: ${theme.colors.gray_700};
    `}

    margin-bottom: 4px;
`;

export const TextAreaInput = styled.TextInput`
    width: 100%;
    height: 120px;
    padding: 14px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.gray_300};
`;