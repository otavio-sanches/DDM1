import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { cores } from '../styles/tema';

const paginas = [
  { rota: 'Home', icone: '⌂', titulo: 'Início' },
  { rota: 'Atividades', icone: '☑', titulo: 'Atividades' },
  { rota: 'Perfil', icone: '◉', titulo: 'Perfil' },
];

export function Tela({ children, navigation, pagina }) {
  return (
    <SafeAreaView style={base.fundo} edges={['top', 'left', 'right', 'bottom']}>
      <StatusBar style="dark" />
      <View style={base.largura}>
        <ScrollView style={base.scroll} contentContainerStyle={base.conteudo} keyboardShouldPersistTaps="handled">
          {children}
        </ScrollView>
        <View style={base.navegacao}>
          {paginas.map((item) => {
            const ativo = item.rota === pagina;
            return (
              <TouchableOpacity
                key={item.rota}
                onPress={() => navigation.navigate(item.rota)}
                style={[base.itemMenu, ativo && base.menuAtivo]}
                accessibilityRole="button"
                accessibilityLabel={`Abrir ${item.titulo}`}
              >
                <Text style={[base.menuIcone, ativo && base.menuTextoAtivo]}>{item.icone}</Text>
                <Text style={[base.menuTexto, ativo && base.menuTextoAtivo]}>{item.titulo}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

export function Botao({ titulo, onPress, secundario = false, perigo = false, pequeno = false }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[base.botao, secundario && base.botaoSecundario, perigo && base.botaoPerigo, pequeno && base.botaoPequeno]}
      accessibilityRole="button"
    >
      <Text style={[base.botaoTexto, secundario && base.botaoSecundarioTexto, perigo && base.botaoPerigoTexto]}>{titulo}</Text>
    </TouchableOpacity>
  );
}

export function BarraProgresso({ valor }) {
  const porcentagem = Math.max(0, Math.min(100, Number(valor) || 0));
  return (
    <View style={base.trilho} accessibilityLabel={`Progresso ${porcentagem} por cento`}>
      <View style={[base.preenchimento, { width: `${porcentagem}%` }]} />
    </View>
  );
}

export function Cabecalho({ titulo, descricao, etiqueta }) {
  return (
    <View style={base.cabecalho}>
      {etiqueta ? <Text style={base.etiqueta}>{etiqueta.toUpperCase()}</Text> : null}
      <Text style={base.titulo}>{titulo}</Text>
      {descricao ? <Text style={base.descricao}>{descricao}</Text> : null}
    </View>
  );
}

export function CardTarefa({ tarefa, onToggle, onExcluir, compacta = false }) {
  const corMateria = tarefa.materia === 'Matemática' ? '#D17B24'
    : tarefa.materia === 'Redação' ? '#9961B8'
    : tarefa.materia === 'Inglês' ? '#128A78' : cores.primaria;

  return (
    <View style={[base.tarefa, compacta && base.tarefaCompacta]}>
      <TouchableOpacity
        onPress={() => onToggle(tarefa.id)}
        style={[base.caixaCheck, tarefa.concluida && base.checkAtivo]}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: tarefa.concluida }}
        accessibilityLabel={`Concluir ${tarefa.titulo}`}
      >
        <Text style={base.checkTexto}>{tarefa.concluida ? '✓' : ''}</Text>
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Text style={[base.tarefaTitulo, tarefa.concluida && base.tarefaConcluida]}>{tarefa.titulo}</Text>
        <View style={base.metaLinha}>
          <View style={[base.ponto, { backgroundColor: corMateria }]} />
          <Text style={base.metaTexto}>{tarefa.materia} · {tarefa.minutos} min</Text>
        </View>
      </View>
      {onExcluir ? (
        <TouchableOpacity onPress={() => onExcluir(tarefa.id)} style={base.excluir} accessibilityLabel={`Excluir ${tarefa.titulo}`}>
          <Text style={base.excluirTexto}>×</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

export const base = StyleSheet.create({
  fundo: { flex: 1, backgroundColor: cores.fundo },
  largura: { flex: 1, width: '100%', maxWidth: 700, alignSelf: 'center' },
  scroll: { flex: 1 },
  conteudo: { padding: 22, paddingTop: 25, paddingBottom: 35 },
  navegacao: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: cores.branco, borderTopWidth: 1, borderTopColor: cores.borda, paddingVertical: 8, paddingHorizontal: 14 },
  itemMenu: { flex: 1, paddingVertical: 8, alignItems: 'center', borderRadius: 14 },
  menuAtivo: { backgroundColor: cores.primariaClara },
  menuIcone: { fontSize: 23, fontWeight: '700', color: cores.secundario },
  menuTexto: { fontSize: 11, fontWeight: '700', marginTop: 3, color: cores.secundario },
  menuTextoAtivo: { color: cores.primariaEscura },
  botao: { backgroundColor: cores.primaria, borderRadius: 13, minHeight: 49, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 17 },
  botaoTexto: { color: cores.branco, fontSize: 15, fontWeight: '800' },
  botaoSecundario: { backgroundColor: cores.primariaClara },
  botaoSecundarioTexto: { color: cores.primariaEscura },
  botaoPerigo: { backgroundColor: '#FCEAEC' },
  botaoPerigoTexto: { color: cores.vermelho },
  botaoPequeno: { minHeight: 38, paddingHorizontal: 12 },
  trilho: { height: 9, backgroundColor: '#DBE7F6', borderRadius: 20, overflow: 'hidden' },
  preenchimento: { height: 9, borderRadius: 20, backgroundColor: cores.primaria },
  cabecalho: { marginBottom: 23 },
  etiqueta: { fontSize: 11, fontWeight: '800', letterSpacing: 1.2, color: cores.primaria, marginBottom: 7 },
  titulo: { fontSize: 29, fontWeight: '900', color: cores.texto, letterSpacing: -0.7 },
  descricao: { color: cores.secundario, fontSize: 14, lineHeight: 21, marginTop: 7 },
  tarefa: { backgroundColor: cores.branco, padding: 16, flexDirection: 'row', alignItems: 'center', gap: 13, borderRadius: 16, borderWidth: 1, borderColor: cores.borda, marginTop: 10 },
  tarefaCompacta: { padding: 14 },
  caixaCheck: { width: 25, height: 25, borderWidth: 2, borderColor: '#B1C4DD', borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  checkAtivo: { backgroundColor: cores.verde, borderColor: cores.verde },
  checkTexto: { color: cores.branco, fontWeight: '900', fontSize: 14 },
  tarefaTitulo: { color: cores.texto, fontSize: 14, fontWeight: '700', lineHeight: 19 },
  tarefaConcluida: { color: cores.secundario, textDecorationLine: 'line-through' },
  metaLinha: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },
  ponto: { width: 7, height: 7, borderRadius: 5, marginRight: 6 },
  metaTexto: { color: cores.secundario, fontSize: 11, fontWeight: '600' },
  excluir: { paddingLeft: 8, paddingVertical: 8 },
  excluirTexto: { color: cores.vermelho, fontSize: 25, fontWeight: '500' },
});
