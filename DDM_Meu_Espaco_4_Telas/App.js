// Projeto baseado nas aulas 07/10 e 14/10 do repositório DDM1.
// A navegação continua usando React Navigation, como solicitado no PDF.
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { EstudosProvider } from './context/EstudosContext';
import StackNavigator from './navigation/StackNavigator';
import { cores } from './styles/tema';

const temaNavegacao = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: cores.fundo, primary: cores.primaria },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <EstudosProvider>
        <NavigationContainer theme={temaNavegacao}>
          <StackNavigator />
        </NavigationContainer>
      </EstudosProvider>
    </SafeAreaProvider>
  );
}
