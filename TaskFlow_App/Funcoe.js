export function verificarLogin(usuario, senha) {
  return usuario.trim() === 'admin' && senha === 'admin';
}
export function criarTarefa(titulo, descricao, categoria) {
  if (!titulo.trim()) return null;
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    titulo: titulo.trim(),
    descricao: descricao.trim(),
    categoria,
    concluida: false,
  };
}
export function alternarConclusao(tarefas, id) {
  return tarefas.map(tarefa => tarefa.id === id ? {...tarefa, concluida: !tarefa.concluida} : tarefa);
}
export function excluirTarefa(tarefas, id) {
  return tarefas.filter(tarefa => tarefa.id !== id);
}
