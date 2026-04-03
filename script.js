// =============================
// ===== INICIAR SESSÃO =====
// =============================

function iniciar() {
  // Pega o nível do usuário ou assume 1
  let nivel = parseInt(localStorage.getItem("nivel")) || 1;

  // Define o tempo da sessão de acordo com o nível
  let tempo = 120; // padrão

  if (nivel === 2) tempo = 120;
  if (nivel === 3) tempo = 180;

  // Salva no localStorage
  localStorage.setItem("tempoSessao", tempo);

  // Redireciona para a página da sessão
  window.location.href = "html/sessao.html";
}