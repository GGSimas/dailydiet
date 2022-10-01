import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 24px;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const Heading = styled.View`
    margin-bottom: 40px;
`;

export const HeadingTitle = styled.Text`
    text-align: center;
    ${({ theme }) => css`
        font-size: ${theme.font_size.lg};
        color: ${theme.colors.red_dark};
        font-family: ${theme.font_family.bold};
    `}
    margin-bottom: 8px;
`;

export const HeadingSubtitle = styled.Text`
    text-align: center;
    ${({ theme }) => css`
            font-size: ${theme.font_size.md};
            color: ${theme.colors.gray_700};
            font-family: ${theme.font_family.regular};
        `}
`;

export const ImageContainer = styled.Image`
    width: 224px;
    height: 288px;

    margin-bottom: 32px;
`;