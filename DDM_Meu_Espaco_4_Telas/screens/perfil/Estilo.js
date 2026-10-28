import { StyleSheet } from 'react-native';
import { cores } from '../../styles/tema';

const styles = StyleSheet.create({
  cartaoUsuario: { alignItems: 'center', padding: 26, borderRadius: 20, backgroundColor: cores.branco, borderWidth: 1, borderColor: cores.borda, marginBottom: 18 },
  avatar: { backgroundColor: cores.primariaClara, borderRadius: 23, width: 76, height: 76, alignItems: 'center', justifyContent: 'center' },
  inicial: { color: cores.primariaEscura, fontSize: 35, fontWeight: '900' },
  nome: { fontWeight: '900', color: cores.texto, fontSize: 20, marginTop: 12 },
  tipo: { color: cores.secundario, fontSize: 12, marginTop: 3 },
  secao: { backgroundColor: cores.branco, borderRadius: 19, padding: 19, borderWidth: 1, borderColor: cores.borda, marginBottom: 17 },
  secaoTitulo: { fontSize: 17, color: cores.texto, fontWeight: '900', marginBottom: 17 },
  grade: { flexDirection: 'row', gap: 8, marginBottom: 21 },
  info: { flex: 1, backgroundColor: cores.fundo, alignItems: 'center', justifyContent: 'center', paddingVertical: 15, borderRadius: 12 },
  numero: { color: cores.primariaEscura, fontWeight: '900', fontSize: 21 },
  legenda: { color: cores.secundario, fontSize: 10, marginTop: 3 },
  metaTopo: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  metaTitulo: { fontSize: 12, fontWeight: '800', color: cores.texto },
  metaNumero: { color: cores.primaria, fontSize: 12, fontWeight: '900' },
  ajudaMeta: { color: cores.secundario, fontSize: 11, marginTop: 10 },
  label: { color: cores.texto, fontSize: 12, fontWeight: '800', marginBottom: 8 },
  input: { backgroundColor: cores.fundo, minHeight: 48, borderRadius: 12, borderWidth: 1, borderColor: cores.borda, marginBottom: 17, paddingHorizontal: 14, color: cores.texto, fontSize: 14 },
  mensagem: { color: cores.vermelho, fontSize: 12, marginBottom: 13 },
  sucesso: { color: cores.verde },
  sair: { marginTop: 1 },
  rodape: { color: cores.secundario, textAlign: 'center', fontSize: 11, marginTop: 17, lineHeight: 17 },
});
export default styles;
