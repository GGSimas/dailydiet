import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme  }) => theme.colors.white};
    padding: 24px;
`;
export const Header = styled.View`
    width: 100%;
    height: 58px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

export const LogoIcon = styled.Image`
    width: 82px;
    height: 37px;
`;

export const Avatar = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;

    border: 2px solid ${({ theme }) => theme.colors.gray_700};
`;

export const Content = styled.View`
    margin-top: 40px;
    flex: 1;
`;

export const Label = styled.Text`
    margin-bottom: 12px;
    ${({ theme }) => css`
        font-size: ${theme.font_size.lg};
        font-family: ${theme.font_family.regular};
        color: ${theme.colors.gray_700};
    `}
`;
