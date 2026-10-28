import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEstudos } from '../context/EstudosContext';
import Login from '../screens/login/Login';
import Home from '../screens/home/Home';
import Atividades from '../screens/atividades/Atividades';
import Perfil from '../screens/perfil/Perfil';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const { usuario } = useEstudos();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
      {usuario === null ? (
        <Stack.Screen name="Login" component={Login} />
      ) : (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Atividades" component={Atividades} />
          <Stack.Screen name="Perfil" component={Perfil} />
        </>
      )}
    </Stack.Navigator>
  );
}
