// Evolução da Home original: continua recebendo e exibindo o nome do usuário.
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Tela, BarraProgresso, Botao, CardTarefa } from '../../components/Interface';
import { useEstudos } from '../../context/EstudosContext';
import styles from './Estilo';

export default function Home({ navigation }) {
  const { usuario, tarefas, concluidas, pendentes, progresso, meta, alternarTarefa } = useEstudos();
  const proximas = tarefas.filter((tarefa) => !tarefa.concluida).slice(0, 3);
  const data = new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });

  return (
    <Tela navigation={navigation} pagina="Home">
      <View style={styles.topo}>
        <View style={{ flex: 1 }}>
          <Text style={styles.data}>{data}</Text>
          <Text style={styles.saudacao}>Olá, {usuario}! <Text>👋</Text></Text>
          <Text style={styles.subtitulo}>Que tal avançar um pouco hoje?</Text>
        </View>
        <TouchableOpacity style={styles.avatar} onPress={() => navigation.navigate('Perfil')} accessibilityLabel="Abrir meu perfil">
          <Text style={styles.avatarTexto}>{usuario?.slice(0, 1).toUpperCase()}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.destaque}>
        <View style={styles.marcaFundo} />
        <Text style={styles.destaqueEtiqueta}>SEU PAINEL DE ESTUDOS</Text>
        <Text style={styles.destaqueTitulo}>Um passo por vez. Uma conquista por dia.</Text>
        <Text style={styles.destaqueDescricao}>Continue marcando as atividades que você já finalizou.</Text>
        <View style={styles.destaqueBotao}><Botao titulo="Ver minhas atividades  →" secundario onPress={() => navigation.navigate('Atividades')} /></View>
      </View>

      <View style={styles.metricas}>
        <View style={styles.metrica}><Text style={styles.metricaIcone}>✓</Text><Text style={styles.metricaValor}>{concluidas}</Text><Text style={styles.metricaLegenda}>Concluídas</Text></View>
        <View style={styles.metrica}><Text style={styles.metricaIcone}>◷</Text><Text style={styles.metricaValor}>{pendentes}</Text><Text style={styles.metricaLegenda}>Pendentes</Text></View>
        <View style={styles.metrica}><Text style={styles.metricaIcone}>◎</Text><Text style={styles.metricaValor}>{meta}</Text><Text style={styles.metricaLegenda}>Sua meta</Text></View>
      </View>

      <View style={styles.cardProgresso}>
        <View style={styles.linhaTitulo}><Text style={styles.secaoTitulo}>Progresso geral</Text><Text style={styles.porcentagem}>{progresso}%</Text></View>
        <BarraProgresso valor={progresso} />
        <Text style={styles.cardLegenda}>{concluidas} de {tarefas.length} atividades concluídas</Text>
      </View>

      <View style={styles.secaoCabecalho}>
        <Text style={styles.secaoTitulo}>Próximas atividades</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Atividades')} accessibilityRole="button"><Text style={styles.link}>Ver todas →</Text></TouchableOpacity>
      </View>
      {proximas.length ? proximas.map((tarefa) => (
        <CardTarefa key={tarefa.id} tarefa={tarefa} onToggle={alternarTarefa} compacta />
      )) : (
        <View style={styles.vazio}><Text style={styles.vazioTexto}>🎉 Você concluiu tudo! Adicione mais uma atividade.</Text></View>
      )}
      <View style={styles.rodapeBotao}><Botao titulo="Ir para meu perfil" onPress={() => navigation.navigate('Perfil')} secundario /></View>
    </Tela>
  );
}
