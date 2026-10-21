
import React, { useState } from 'react';

import styles from './Estilo';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function entrar() {
    if (usuario.trim() === '' || senha.trim() === '') {
      Alert.alert(
        'Atenção',
        'Preencha o usuário e a senha.'
      );
      return;
    }

    // Navega para a tela Home
    navigation.navigate('Home', {
      usuario: usuario,
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Bem-vindo!
      </Text>

      <Text style={styles.subtitulo}>
        Faça login para continuar
      </Text>

      <Text style={styles.label}>
        Usuário
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu usuário"
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
      />

      <Text style={styles.label}>
        Senha
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={entrar}
      >
        <Text style={styles.textoBotao}>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
