import { StyleSheet } from 'react-native';
import { cores } from '../../styles/tema';

const styles = StyleSheet.create({
  topo: { flexDirection: 'row', alignItems: 'center', marginBottom: 23, gap: 12 },
  data: { fontSize: 12, color: cores.primaria, fontWeight: '800', textTransform: 'capitalize', marginBottom: 7 },
  saudacao: { fontSize: 25, color: cores.texto, fontWeight: '900' },
  subtitulo: { color: cores.secundario, fontSize: 13, marginTop: 4 },
  avatar: { width: 50, height: 50, borderRadius: 18, backgroundColor: cores.primariaClara, alignItems: 'center', justifyContent: 'center' },
  avatarTexto: { fontSize: 24, fontWeight: '900', color: cores.primariaEscura },
  destaque: { borderRadius: 22, backgroundColor: cores.primaria, padding: 24, overflow: 'hidden', marginBottom: 16 },
  marcaFundo: { position: 'absolute', width: 220, height: 220, right: -85, top: -85, borderRadius: 130, borderWidth: 42, borderColor: 'rgba(255,255,255,0.08)' },
  destaqueEtiqueta: { color: '#D6E9FF', fontSize: 10, letterSpacing: 1, fontWeight: '900', marginBottom: 13 },
  destaqueTitulo: { color: cores.branco, fontWeight: '900', fontSize: 24, lineHeight: 30, maxWidth: 295 },
  destaqueDescricao: { color: '#E5F0FF', fontSize: 13, lineHeight: 19, marginTop: 12, maxWidth: 285 },
  destaqueBotao: { marginTop: 22, maxWidth: 250 },
  metricas: { flexDirection: 'row', gap: 9, marginBottom: 17 },
  metrica: { flex: 1, backgroundColor: cores.branco, borderRadius: 17, borderWidth: 1, borderColor: cores.borda, paddingVertical: 14, paddingHorizontal: 10, minWidth: 0 },
  metricaIcone: { color: cores.primaria, fontWeight: '900', fontSize: 18 },
  metricaValor: { color: cores.texto, fontWeight: '900', fontSize: 24, marginTop: 4 },
  metricaLegenda: { fontSize: 11, color: cores.secundario, marginTop: 3, fontWeight: '600' },
  cardProgresso: { backgroundColor: cores.branco, borderRadius: 18, borderWidth: 1, borderColor: cores.borda, padding: 19, marginBottom: 28 },
  linhaTitulo: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  secaoTitulo: { color: cores.texto, fontWeight: '900', fontSize: 17 },
  porcentagem: { color: cores.primaria, fontSize: 18, fontWeight: '900' },
  cardLegenda: { color: cores.secundario, fontSize: 12, marginTop: 10 },
  secaoCabecalho: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 },
  link: { color: cores.primaria, fontSize: 12, fontWeight: '800' },
  vazio: { backgroundColor: cores.branco, padding: 20, borderRadius: 14, marginTop: 14 },
  vazioTexto: { color: cores.secundario, textAlign: 'center', fontSize: 13 },
  rodapeBotao: { marginTop: 22 },
});
export default styles;
