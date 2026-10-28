import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Botao, Cabecalho, CardTarefa, Tela } from '../../components/Interface';
import { useEstudos } from '../../context/EstudosContext';
import styles from './Estilo';

const materias = ['Programação', 'Matemática', 'Redação', 'Inglês', 'Outros'];
const filtros = ['Todas', 'Pendentes', 'Concluídas'];

export default function Atividades({ navigation }) {
  const { tarefas, concluidas, pendentes, alternarTarefa, adicionarTarefa, excluirTarefa } = useEstudos();
  const [filtro, setFiltro] = useState('Todas');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [materia, setMateria] = useState('Programação');
  const [erro, setErro] = useState('');

  const filtradas = tarefas.filter((tarefa) => filtro === 'Todas'
    || (filtro === 'Pendentes' && !tarefa.concluida)
    || (filtro === 'Concluídas' && tarefa.concluida));

  function salvar() {
    if (!adicionarTarefa(titulo, materia)) {
      setErro('Escreva um nome para a atividade.');
      return;
    }
    setTitulo('');
    setErro('');
    setFiltro('Todas');
    setMostrarFormulario(false);
  }

  return (
    <Tela navigation={navigation} pagina="Atividades">
      <Cabecalho etiqueta="ORGANIZE SEUS ESTUDOS" titulo="Minhas atividades" descricao="Adicione tarefas, filtre por status e marque o que já concluiu." />
      <View style={styles.resumo}>
        <View><Text style={styles.resumoNumero}>{tarefas.length}</Text><Text style={styles.resumoLegenda}>Total</Text></View>
        <View style={styles.separador} />
        <View><Text style={styles.resumoNumero}>{pendentes}</Text><Text style={styles.resumoLegenda}>Pendentes</Text></View>
        <View style={styles.separador} />
        <View><Text style={styles.resumoNumero}>{concluidas}</Text><Text style={styles.resumoLegenda}>Feitas</Text></View>
      </View>

      <Botao titulo={mostrarFormulario ? 'Cancelar nova atividade  ×' : '+  Nova atividade'} onPress={() => { setMostrarFormulario(!mostrarFormulario); setErro(''); }} secundario={mostrarFormulario} />

      {mostrarFormulario ? (
        <View style={styles.formulario}>
          <Text style={styles.formTitulo}>Adicionar atividade</Text>
          <Text style={styles.label}>O que você precisa fazer?</Text>
          <TextInput style={styles.input} placeholder="Ex.: Revisar JavaScript" placeholderTextColor="#8A98AA" value={titulo} onChangeText={(valor) => { setTitulo(valor); setErro(''); }} onSubmitEditing={salvar} maxLength={100} accessibilityLabel="Nova atividade" />
          <Text style={styles.label}>Matéria</Text>
          <View style={styles.materias}>
            {materias.map((opcao) => (
              <TouchableOpacity key={opcao} onPress={() => setMateria(opcao)} style={[styles.tag, materia === opcao && styles.tagSelecionada]} accessibilityRole="button">
                <Text style={[styles.tagTexto, materia === opcao && styles.tagTextoSelecionada]}>{opcao}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {erro ? <Text style={styles.erro}>{erro}</Text> : null}
          <Botao titulo="Salvar atividade" onPress={salvar} />
        </View>
      ) : null}

      <View style={styles.filtros}>
        {filtros.map((opcao) => (
          <TouchableOpacity key={opcao} style={[styles.filtro, filtro === opcao && styles.filtroAtivo]} onPress={() => setFiltro(opcao)} accessibilityRole="button">
            <Text style={[styles.filtroTexto, filtro === opcao && styles.filtroTextoAtivo]}>{opcao}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.contador}>{filtradas.length} atividade{filtradas.length === 1 ? '' : 's'} encontrada{filtradas.length === 1 ? '' : 's'}</Text>
      {filtradas.length ? filtradas.map((tarefa) => (
        <CardTarefa key={tarefa.id} tarefa={tarefa} onToggle={alternarTarefa} onExcluir={excluirTarefa} />
      )) : <View style={styles.vazio}><Text style={styles.vazioTitulo}>Nenhuma atividade por aqui</Text><Text style={styles.vazioDescricao}>Mude o filtro ou crie uma nova atividade.</Text></View>}
      <Text style={styles.dica}>Dica: toque no quadradinho para marcar uma tarefa como concluída. O × remove a atividade.</Text>
    </Tela>
  );
}
