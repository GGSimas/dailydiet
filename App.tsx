import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold
} from '@expo-google-fonts/nunito-sans';
import theme from './src/theme';
import { ActivityIndicator, StatusBar } from 'react-native';
import { Routes } from './src/routes';
import { CreatedMealAllowed } from '@screens/CreatedMealAllowed';
import { CreatedMealNotAllowed } from '@screens/CreatedMealNotAllowed';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
      {fontsLoaded ? <Routes /> : <ActivityIndicator style={{ flex: 1}} size={24} color={theme.colors.gray_700} />}
    </ThemeProvider>
  );
}


