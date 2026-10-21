
import React from 'react';

import styles from './Estilo';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Home({ navigation, route }) {
  const usuario = route.params?.usuario || 'usuário';

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Home
      </Text>

      <Text style={styles.mensagem}>
        Olá, {usuario}!
      </Text>

      <Text style={styles.descricao}>
        Você entrou no aplicativo.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotao}>
          Voltar para o Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
