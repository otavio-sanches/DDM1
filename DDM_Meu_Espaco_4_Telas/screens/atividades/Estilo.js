import { StyleSheet } from 'react-native';
import { cores } from '../../styles/tema';

const styles = StyleSheet.create({
  resumo: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', backgroundColor: cores.branco, borderRadius: 19, paddingVertical: 19, marginBottom: 19, borderWidth: 1, borderColor: cores.borda },
  resumoNumero: { color: cores.texto, fontSize: 25, fontWeight: '900', textAlign: 'center' },
  resumoLegenda: { color: cores.secundario, fontSize: 11, textAlign: 'center', marginTop: 4 },
  separador: { width: 1, height: 33, backgroundColor: cores.borda },
  formulario: { padding: 18, backgroundColor: cores.branco, borderRadius: 18, marginTop: 15, borderWidth: 1, borderColor: cores.borda },
  formTitulo: { fontSize: 17, fontWeight: '900', color: cores.texto, marginBottom: 16 },
  label: { fontSize: 12, fontWeight: '800', marginBottom: 7, color: cores.texto },
  input: { minHeight: 48, paddingHorizontal: 14, borderRadius: 12, backgroundColor: cores.fundo, borderColor: cores.borda, borderWidth: 1, fontSize: 14, color: cores.texto, marginBottom: 15 },
  materias: { flexDirection: 'row', flexWrap: 'wrap', gap: 7, marginBottom: 16 },
  tag: { borderRadius: 20, paddingHorizontal: 12, paddingVertical: 8, backgroundColor: cores.fundo, borderWidth: 1, borderColor: cores.borda },
  tagSelecionada: { backgroundColor: cores.primariaClara, borderColor: cores.primaria },
  tagTexto: { fontSize: 11, color: cores.secundario, fontWeight: '800' },
  tagTextoSelecionada: { color: cores.primariaEscura },
  erro: { color: cores.vermelho, fontSize: 12, fontWeight: '700', marginBottom: 12 },
  filtros: { flexDirection: 'row', marginTop: 26, marginBottom: 18, gap: 7 },
  filtro: { flex: 1, minHeight: 40, backgroundColor: cores.branco, alignItems: 'center', justifyContent: 'center', borderRadius: 12, borderWidth: 1, borderColor: cores.borda },
  filtroAtivo: { backgroundColor: cores.primaria, borderColor: cores.primaria },
  filtroTexto: { color: cores.secundario, fontWeight: '800', fontSize: 11 },
  filtroTextoAtivo: { color: cores.branco },
  contador: { color: cores.secundario, fontSize: 12, fontWeight: '600' },
  vazio: { padding: 24, borderRadius: 16, alignItems: 'center', backgroundColor: cores.branco, marginTop: 14, borderWidth: 1, borderColor: cores.borda },
  vazioTitulo: { color: cores.texto, fontWeight: '900', fontSize: 15 },
  vazioDescricao: { color: cores.secundario, fontSize: 12, marginTop: 6, textAlign: 'center' },
  dica: { color: cores.secundario, fontSize: 12, lineHeight: 18, marginTop: 18 },
});
export default styles;
