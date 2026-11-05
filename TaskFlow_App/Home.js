import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, Keyboard, ScrollView } from 'react-native';
import styles from './Estilo';
import { criarTarefa, alternarConclusao, excluirTarefa } from './Funcoe';
const CATEGORIAS = ['Escola', 'Pessoal', 'Trabalho'];
export default function Home({ navigation }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('Escola');
  const [tarefas, setTarefas] = useState([
    { id: '1', titulo: 'Revisar JavaScript', descricao: 'Estudar listas e componentes', categoria: 'Escola', concluida: false },
    { id: '2', titulo: 'Organizar a semana', descricao: 'Separar horários de estudo', categoria: 'Pessoal', concluida: true },
  ]);
  function adicionar() {
    const nova = criarTarefa(titulo, descricao, categoria);
    if (!nova) return Alert.alert('Atenção', 'Digite o nome da tarefa.');
    setTarefas(atuais => [nova, ...atuais]);
    setTitulo(''); setDescricao(''); Keyboard.dismiss();
  }
  function confirmarExclusao(id) {
    Alert.alert('Excluir tarefa', 'Deseja realmente excluir esta tarefa?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Excluir', style: 'destructive', onPress: () => setTarefas(atuais => excluirTarefa(atuais, id)) },
    ]);
  }
  const concluidas = tarefas.filter(t => t.concluida).length;
  return <View style={styles.container}>
    <View style={styles.cabecalho}><View style={styles.cabecalhoLinha}>
      <View><Text style={styles.saudacao}>Seu espaço de produtividade</Text><Text style={styles.homeTitulo}>Minhas tarefas</Text></View>
      <TouchableOpacity onPress={() => navigation.replace('Login')}><Text style={styles.sair}>Sair</Text></TouchableOpacity>
    </View></View>
    <FlatList data={tarefas} keyExtractor={item => item.id} keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.conteudo}
      ListHeaderComponent={<>
        <View style={styles.indicadores}>
          <View style={styles.indicador}><Text style={styles.indicadorValor}>{tarefas.length - concluidas}</Text><Text style={styles.indicadorLegenda}>Pendentes</Text></View>
          <View style={styles.indicador}><Text style={styles.indicadorValor}>{concluidas}</Text><Text style={styles.indicadorLegenda}>Concluídas</Text></View>
        </View>
        <View style={styles.cartao}>
          <Text style={styles.secaoTitulo}>+ Nova tarefa</Text>
          <Text style={styles.label}>Nome da tarefa *</Text>
          <TextInput style={styles.input} placeholder="Ex.: Fazer atividade de PHP" value={titulo} onChangeText={setTitulo} maxLength={80} />
          <Text style={styles.label}>Descrição</Text>
          <TextInput style={[styles.input, { minHeight: 70, textAlignVertical: 'top' }]} placeholder="Detalhes da atividade (opcional)" multiline value={descricao} onChangeText={setDescricao} maxLength={250} />
          <Text style={styles.label}>Categoria</Text>
          <View style={styles.categorias}>{CATEGORIAS.map(opcao => <TouchableOpacity key={opcao} onPress={() => setCategoria(opcao)} style={[styles.categoria, categoria === opcao && styles.categoriaAtiva]}><Text style={[styles.categoriaTexto, categoria === opcao && styles.categoriaTextoAtivo]}>{opcao}</Text></TouchableOpacity>)}</View>
          <TouchableOpacity style={styles.botao} onPress={adicionar}><Text style={styles.textoBotao}>Adicionar tarefa</Text></TouchableOpacity>
        </View>
        <Text style={styles.secaoTitulo}>Lista de tarefas ({tarefas.length})</Text>
      </>}
      renderItem={({ item }) => <View style={styles.tarefa}>
        <TouchableOpacity accessibilityLabel="Concluir ou reabrir tarefa" onPress={() => setTarefas(atuais => alternarConclusao(atuais, item.id))} style={[styles.marcador, item.concluida && styles.marcadorConcluido]}><Text style={{ color: 'white', fontWeight: '800' }}>{item.concluida ? '✓' : ''}</Text></TouchableOpacity>
        <View style={{ flex: 1 }}><Text style={[styles.tarefaTitulo, item.concluida && styles.tarefaConcluida]}>{item.titulo}</Text>{!!item.descricao && <Text style={styles.tarefaDescricao}>{item.descricao}</Text>}<Text style={styles.etiqueta}>{item.categoria}</Text></View>
        <TouchableOpacity onPress={() => confirmarExclusao(item.id)}><Text style={styles.excluir}>Excluir</Text></TouchableOpacity>
      </View>}
      ListEmptyComponent={<Text style={styles.vazio}>Nenhuma tarefa cadastrada. Adicione sua primeira tarefa acima!</Text>}
    />
  </View>;
}
