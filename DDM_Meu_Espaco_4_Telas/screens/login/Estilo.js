import { StyleSheet } from 'react-native';
import { cores } from '../../styles/tema';

const styles = StyleSheet.create({
  area: { flex: 1, backgroundColor: cores.primariaEscura },
  scroll: { flexGrow: 1, justifyContent: 'center', paddingVertical: 20, paddingHorizontal: 16 },
  moldura: { width: '100%', maxWidth: 480, alignSelf: 'center' },
  capa: { backgroundColor: cores.primaria, minHeight: 260, padding: 30, paddingTop: 33, borderTopLeftRadius: 26, borderTopRightRadius: 26, overflow: 'hidden' },
  circuloUm: { position: 'absolute', right: -55, top: -80, width: 210, height: 210, borderRadius: 120, backgroundColor: 'rgba(255,255,255,0.09)' },
  circuloDois: { position: 'absolute', right: 25, bottom: -70, width: 135, height: 135, borderRadius: 90, borderWidth: 25, borderColor: 'rgba(255,255,255,0.10)' },
  logo: { width: 47, height: 47, backgroundColor: cores.branco, borderRadius: 15, alignItems: 'center', justifyContent: 'center', marginBottom: 24 },
  logoTexto: { fontSize: 27, color: cores.primaria, fontWeight: '900' },
  capaEtiqueta: { color: '#D9EAFF', letterSpacing: 1.2, fontSize: 10, fontWeight: '800', marginBottom: 5 },
  capaTitulo: { fontSize: 34, fontWeight: '900', color: cores.branco, letterSpacing: -0.8 },
  capaTexto: { fontSize: 14, color: '#E4F0FF', marginTop: 6 },
  cartao: { backgroundColor: cores.branco, padding: 28, borderBottomLeftRadius: 26, borderBottomRightRadius: 26 },
  titulo: { fontSize: 26, fontWeight: '900', color: cores.texto },
  subtitulo: { color: cores.secundario, fontSize: 14, marginTop: 5, marginBottom: 26 },
  label: { fontSize: 13, color: cores.texto, fontWeight: '800', marginBottom: 8 },
  input: { height: 50, borderRadius: 12, backgroundColor: cores.fundo, paddingHorizontal: 16, borderWidth: 1, borderColor: cores.borda, fontSize: 15, marginBottom: 20, color: cores.texto },
  senhaContainer: { height: 50, borderRadius: 12, backgroundColor: cores.fundo, borderWidth: 1, borderColor: cores.borda, flexDirection: 'row', alignItems: 'center' },
  senhaInput: { flex: 1, height: 50, paddingLeft: 16, fontSize: 15, color: cores.texto, minWidth: 0 },
  botaoOlho: { paddingHorizontal: 14, paddingVertical: 12 },
  mostrar: { fontSize: 12, fontWeight: '800', color: cores.primaria },
  erro: { color: cores.vermelho, fontSize: 12, fontWeight: '700', marginTop: 9 },
  botao: { marginTop: 24, height: 52, backgroundColor: cores.primaria, borderRadius: 13, alignItems: 'center', justifyContent: 'center' },
  textoBotao: { color: cores.branco, fontSize: 15, fontWeight: '800' },
  aviso: { fontSize: 11, color: cores.secundario, textAlign: 'center', lineHeight: 17, marginTop: 18 },
  rodape: { textAlign: 'center', color: '#B9D6F8', fontSize: 11, marginTop: 18 },
});

export default styles;
