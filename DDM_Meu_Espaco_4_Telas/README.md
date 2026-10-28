# DDM — Meu Espaço (4 telas)

Projeto de React Native + Expo construído **a partir do projeto original** `DDM1-main/aula_14_10/tela_secundaria` (e da aula inicial de 07/10), seguindo o documento **DDM ORIENTAÇÃO.pdf**.

## Como abrir (Windows / VS Code)

1. Extraia `DDM_Meu_Espaco_4_Telas.zip`.
2. No VS Code, use **Arquivo > Abrir Pasta** e escolha `DDM_Meu_Espaco_4_Telas`.
3. Abra o terminal do VS Code (Ctrl + `).
4. Execute:

```bash
npm install
npm run web
```

O navegador abrirá o Expo Web. Se não abrir sozinho, acesse o endereço local informado no terminal. **É necessário ter Node.js instalado.**

Para abrir no celular: `npm start` e use o aplicativo Expo Go, caso a versão do SDK esteja disponível no dispositivo.

## Exatamente 4 telas e navegação funcional

| Tela | Arquivo | Função |
| --- | --- | --- |
| 1. Login | `screens/login/Login.js` | Entrar com usuário e senha (demonstração local) |
| 2. Home | `screens/home/Home.js` | Mostrar usuário, progresso e atalhos |
| 3. Atividades | `screens/atividades/Atividades.js` | Criar, marcar, filtrar e excluir tarefas |
| 4. Perfil | `screens/perfil/Perfil.js` | Editar nome, meta e sair |

**Como testar a navegação:**

1. Em **Login**, digite um usuário e uma senha não vazios e clique **Entrar**.
2. Na **Home**, abra **Atividades** pelo botão azul ou pela barra inferior.
3. Em **Atividades**, clique **+ Nova atividade**, preencha e salve. Marque/desmarque tarefas, filtre por status e remova com `×`.
4. Abra **Perfil** pela barra inferior, atualize seu nome e a meta, e clique **Salvar alterações**.
5. Volte à **Home** para ver as alterações. Em **Perfil**, clique **Sair da conta** para retornar ao Login.

## Mudanças em relação ao código original

- Corrigidos os imports de `App.js` e o conteúdo dos dois arquivos `Estilo.js` (antes misturavam o componente Login com estilos e não exportavam `styles`).
- Preservados o conceito original de Login → Home, os campos usuário/senha, o nome do usuário na Home e a cor-base azul `#2878d0`.
- Adicionadas **duas telas** para completar quatro, com `React Navigation` e `createNativeStackNavigator`.
- Criado o arquivo `navigation/StackNavigator.js` (que estava vazio no projeto original).
- Criada uma estrutura de componentes e estado compartilhado para atividades, progresso e perfil.
- Layout responsivo para celular e navegador, usando apenas as dependências existentes na atividade.

## Estrutura

```text
DDM_Meu_Espaco_4_Telas/
├── App.js
├── navigation/
│   └── StackNavigator.js
├── screens/
│   ├── login/
│   │   ├── Login.js
│   │   └── Estilo.js
│   ├── home/
│   │   ├── Home.js
│   │   └── Estilo.js
│   ├── atividades/
│   │   ├── Atividades.js
│   │   └── Estilo.js
│   └── perfil/
│       ├── Perfil.js
│       └── Estilo.js
├── components/
│   └── Interface.js
├── context/
│   └── EstudosContext.js
├── styles/
│   └── tema.js
├── assets/
├── app.json
└── package.json
```

## Observações importantes

- É um **trabalho de navegação e interface**, sem backend. O Login verifica se ambos os campos foram preenchidos; **não valida credenciais em um servidor**.
- Tarefas, nome e meta são guardados na memória enquanto o aplicativo está aberto. Ao recarregar, os exemplos e valores iniciais retornam.
- Dependências mantidas na mesma família de versões do projeto original fornecido: Expo 57, React Navigation 7 e React Native 0.86.
- Não inclua `node_modules` ao entregar ao professor (o arquivo ZIP não contém essa pasta).
- Para verificar a estrutura via Node.js: `npm run check`.
