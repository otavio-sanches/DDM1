// Evolução da tela Login original: mantém usuário/senha e adiciona validação visível.
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useEstudos } from '../../context/EstudosContext';
import styles from './Estilo';

export default function Login() {
  const { entrar } = useEstudos();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erro, setErro] = useState('');

  function fazerLogin() {
    if (!usuario.trim() || !senha.trim()) {
      setErro('Preencha o usuário e a senha para continuar.');
      return;
    }
    setErro('');
    // Demonstração escolar: os campos são validados, mas não há servidor de autenticação.
    entrar(usuario);
  }

  return (
    <SafeAreaView style={styles.area} edges={['top', 'left', 'right', 'bottom']}>
      <StatusBar style="light" />
      <KeyboardAvoidingView style={styles.area} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          <View style={styles.moldura}>
            <View style={styles.capa}>
              <View style={styles.circuloUm} />
              <View style={styles.circuloDois} />
              <View style={styles.logo}><Text style={styles.logoTexto}>M</Text></View>
              <Text style={styles.capaEtiqueta}>DDM · PROJETO DE NAVEGAÇÃO</Text>
              <Text style={styles.capaTitulo}>Meu Espaço</Text>
              <Text style={styles.capaTexto}>Sua rotina de estudos em um só lugar.</Text>
            </View>
            <View style={styles.cartao}>
              <Text style={styles.titulo}>Bem-vindo!</Text>
              <Text style={styles.subtitulo}>Faça login para continuar</Text>

              <Text style={styles.label}>Usuário</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite seu usuário"
                placeholderTextColor="#8797AA"
                value={usuario}
                onChangeText={(texto) => { setUsuario(texto); setErro(''); }}
                autoCapitalize="words"
                autoCorrect={false}
                returnKeyType="next"
                accessibilityLabel="Nome de usuário"
              />

              <Text style={styles.label}>Senha</Text>
              <View style={styles.senhaContainer}>
                <TextInput
                  style={styles.senhaInput}
                  placeholder="Digite sua senha"
                  placeholderTextColor="#8797AA"
                  value={senha}
                  onChangeText={(texto) => { setSenha(texto); setErro(''); }}
                  secureTextEntry={!mostrarSenha}
                  onSubmitEditing={fazerLogin}
                  accessibilityLabel="Senha"
                />
                <TouchableOpacity onPress={() => setMostrarSenha((valor) => !valor)} accessibilityRole="button" style={styles.botaoOlho}>
                  <Text style={styles.mostrar}>{mostrarSenha ? 'Ocultar' : 'Mostrar'}</Text>
                </TouchableOpacity>
              </View>
              {erro ? <Text style={styles.erro} accessibilityRole="alert">{erro}</Text> : null}
              <TouchableOpacity style={styles.botao} onPress={fazerLogin} accessibilityRole="button">
                <Text style={styles.textoBotao}>Entrar no aplicativo  →</Text>
              </TouchableOpacity>
              <Text style={styles.aviso}>Versão demonstrativa: use qualquer usuário e senha preenchidos.</Text>
            </View>
            <Text style={styles.rodape}>Projeto React Native + Expo · 4 telas</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
