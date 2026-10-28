import React, { createContext, useContext, useMemo, useState } from 'react';

const EstudosContext = createContext(null);

// Dados locais para demonstrar funcionalidades sem precisar de servidor.
const exemplos = [
  { id: 1, titulo: 'Revisar componentes do React Native', materia: 'Programação', minutos: 25, concluida: true },
  { id: 2, titulo: 'Praticar navegação entre telas', materia: 'Programação', minutos: 35, concluida: false },
  { id: 3, titulo: 'Resolver exercícios de funções', materia: 'Matemática', minutos: 40, concluida: false },
  { id: 4, titulo: 'Escrever a introdução da redação', materia: 'Redação', minutos: 30, concluida: false },
  { id: 5, titulo: 'Revisar verbos em inglês', materia: 'Inglês', minutos: 20, concluida: true },
];

export function EstudosProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [tarefas, setTarefas] = useState(exemplos);
  const [meta, setMeta] = useState(4);

  const concluidas = tarefas.filter((item) => item.concluida).length;
  const pendentes = tarefas.length - concluidas;
  const progresso = tarefas.length ? Math.round((concluidas / tarefas.length) * 100) : 0;

  function entrar(nome) {
    setUsuario(nome.trim());
  }

  function sair() {
    setUsuario(null);
  }

  function editarUsuario(nome) {
    if (nome.trim()) setUsuario(nome.trim());
  }

  function alternarTarefa(id) {
    setTarefas((atual) => atual.map((tarefa) => tarefa.id === id
      ? { ...tarefa, concluida: !tarefa.concluida }
      : tarefa));
  }

  function adicionarTarefa(titulo, materia) {
    if (!titulo.trim()) return false;
    setTarefas((atual) => [...atual, {
      id: Date.now() + Math.random(),
      titulo: titulo.trim(),
      materia,
      minutos: 30,
      concluida: false,
    }]);
    return true;
  }

  function excluirTarefa(id) {
    setTarefas((atual) => atual.filter((tarefa) => tarefa.id !== id));
  }

  function alterarMeta(valor) {
    const numero = Number(valor);
    if (!Number.isInteger(numero) || numero < 1 || numero > 99) return false;
    setMeta(numero);
    return true;
  }

  const valor = useMemo(() => ({
    usuario, tarefas, concluidas, pendentes, progresso, meta,
    entrar, sair, editarUsuario, alternarTarefa, adicionarTarefa, excluirTarefa, alterarMeta,
  }), [usuario, tarefas, concluidas, pendentes, progresso, meta]);

  return <EstudosContext.Provider value={valor}>{children}</EstudosContext.Provider>;
}

export function useEstudos() {
  const contexto = useContext(EstudosContext);
  if (!contexto) throw new Error('useEstudos deve estar dentro de EstudosProvider');
  return contexto;
}
