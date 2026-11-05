# TaskFlow — Aplicativo de tarefas (React Native + Expo)

## Como executar
1. Instale o Node.js LTS e o aplicativo **Expo Go** no celular.
2. Abra esta pasta no VS Code e abra o terminal.
3. Execute `npm install`.
4. Execute `npx expo start`.
5. Leia o QR Code pelo Expo Go (Android) ou pela câmera do iPhone, com celular e computador na mesma rede.
6. Se a conexão local falhar, tente `npx expo start --tunnel`.

**Login de demonstração:** usuário `admin`, senha `admin`.

## Arquivos
- `App.js`: navegação entre telas.
- `Login.js`: formulário de login com validação.
- `Home.js`: formulário, contadores e `FlatList` de tarefas.
- `Funcoe.js`: funções de login, criação, conclusão e exclusão.
- `Estilo.js`: estilos compartilhados.

## Requisitos atendidos
- Inputs controlados com `useState`.
- Login com feedback de erro.
- Lista dinâmica com `FlatList`, `data`, `keyExtractor` e `renderItem`.
- Adicionar, concluir/reabrir e excluir tarefas.
- Categorias selecionáveis e contadores atualizados automaticamente.

**Observação:** as tarefas ficam na memória durante o uso. Ao fechar/reiniciar o app, a lista volta aos exemplos iniciais. O login é didático, não adequado para autenticação real.
