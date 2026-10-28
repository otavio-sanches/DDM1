import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Botao, Cabecalho, BarraProgresso, Tela } from '../../components/Interface';
import { useEstudos } from '../../context/EstudosContext';
import styles from './Estilo';

export default function Perfil({ navigation }) {
  const { usuario, tarefas, concluidas, progresso, meta, editarUsuario, alterarMeta, sair } = useEstudos();
  const [nome, setNome] = useState(usuario);
  const [metaTexto, setMetaTexto] = useState(String(meta));
  const [mensagem, setMensagem] = useState('');
  const metaPercentual = Math.min(100, Math.round((concluidas / meta) * 100));

  function salvarPerfil() {
    if (!nome.trim()) {
      setMensagem('Digite um nome válido.');
      return;
    }
    if (!alterarMeta(metaTexto)) {
      setMensagem('A meta precisa ser um número inteiro entre 1 e 99.');
      return;
    }
    editarUsuario(nome);
    setMensagem('Perfil atualizado com sucesso!');
  }

  return (
    <Tela navigation={navigation} pagina="Perfil">
      <Cabecalho etiqueta="MINHA CONTA" titulo="Meu perfil" descricao="Acompanhe seu progresso e personalize suas informações." />
      <View style={styles.cartaoUsuario}>
        <View style={styles.avatar}><Text style={styles.inicial}>{usuario.slice(0, 1).toUpperCase()}</Text></View>
        <Text style={styles.nome}>{usuario}</Text>
        <Text style={styles.tipo}>Estudante · Meu Espaço</Text>
      </View>

      <View style={styles.secao}>
        <Text style={styles.secaoTitulo}>Meu desempenho</Text>
        <View style={styles.grade}>
          <View style={styles.info}><Text style={styles.numero}>{tarefas.length}</Text><Text style={styles.legenda}>Atividades</Text></View>
          <View style={styles.info}><Text style={styles.numero}>{concluidas}</Text><Text style={styles.legenda}>Concluídas</Text></View>
          <View style={styles.info}><Text style={styles.numero}>{progresso}%</Text><Text style={styles.legenda}>Progresso</Text></View>
        </View>
        <View style={styles.metaTopo}><Text style={styles.metaTitulo}>Meta pessoal</Text><Text style={styles.metaNumero}>{concluidas} / {meta}</Text></View>
        <BarraProgresso valor={metaPercentual} />
        <Text style={styles.ajudaMeta}>A meta conta quantas atividades você deseja concluir.</Text>
      </View>

      <View style={styles.secao}>
        <Text style={styles.secaoTitulo}>Editar informações</Text>
        <Text style={styles.label}>Nome de exibição</Text>
        <TextInput style={styles.input} value={nome} onChangeText={(v) => { setNome(v); setMensagem(''); }} placeholder="Seu nome" accessibilityLabel="Nome de exibição" maxLength={40} />
        <Text style={styles.label}>Minha meta de atividades</Text>
        <TextInput style={styles.input} value={metaTexto} onChangeText={(v) => { setMetaTexto(v); setMensagem(''); }} keyboardType="number-pad" placeholder="Ex.: 4" accessibilityLabel="Meta de atividades" maxLength={2} />
        {mensagem ? <Text style={[styles.mensagem, mensagem.includes('sucesso') && styles.sucesso]}>{mensagem}</Text> : null}
        <Botao titulo="Salvar alterações" onPress={salvarPerfil} />
      </View>

      <View style={styles.sair}><Botao titulo="Sair da conta" perigo onPress={sair} /></View>
      <Text style={styles.rodape}>DDM · Projeto acadêmico. Os dados ficam na memória durante o uso do app.</Text>
    </Tela>
  );
}
