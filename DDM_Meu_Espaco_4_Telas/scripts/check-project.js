// Conferência simples de estrutura, sem dependências extras.
const fs = require('fs');
const path = require('path');
const arquivos = [
  'App.js', 'index.js', 'navigation/StackNavigator.js',
  'screens/login/Login.js', 'screens/login/Estilo.js',
  'screens/home/Home.js', 'screens/home/Estilo.js',
  'screens/atividades/Atividades.js', 'screens/atividades/Estilo.js',
  'screens/perfil/Perfil.js', 'screens/perfil/Estilo.js',
  'components/Interface.js', 'context/EstudosContext.js', 'styles/tema.js',
];
for (const arquivo of arquivos) {
  if (!fs.existsSync(path.join(__dirname, '..', arquivo))) {
    console.error('Faltando:', arquivo);
    process.exitCode = 1;
  }
}
if (!process.exitCode) console.log('Estrutura conferida: quatro telas, estilos e navegação presentes.');
