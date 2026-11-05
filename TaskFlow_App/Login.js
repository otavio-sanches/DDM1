import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './Estilo';
import { verificarLogin } from './Funcoe';
export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  function fazerLogin() {
    if (verificarLogin(usuario, senha)) {
      setSenha('');
      navigation.replace('Home');
    } else Alert.alert('Erro', 'Usuário ou senha incorretos!');
  }
  return <KeyboardAvoidingView style={styles.loginContainer} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
    <View style={styles.logo}><Text style={styles.logoTexto}>✓</Text></View>
    <Text style={styles.titulo}>Bem-vindo ao TaskFlow</Text>
    <Text style={styles.subtitulo}>Organize seus estudos e conquiste suas metas.</Text>
    <Text style={styles.label}>Usuário</Text>
    <TextInput style={styles.input} placeholder="Digite seu usuário" value={usuario} onChangeText={setUsuario} autoCapitalize="none" autoCorrect={false} />
    <Text style={styles.label}>Senha</Text>
    <TextInput style={styles.input} placeholder="Digite sua senha" value={senha} onChangeText={setSenha} secureTextEntry onSubmitEditing={fazerLogin} />
    <TouchableOpacity style={styles.botao} onPress={fazerLogin}><Text style={styles.textoBotao}>Entrar →</Text></TouchableOpacity>
    <Text style={styles.dica}>Acesso de demonstração: admin / admin</Text>
  </KeyboardAvoidingView>;
}
