// =============================
// ===== VARIÁVEIS GLOBAIS =====
// =============================

let indexMensagem = 0;
let indexDesafio = 0;

let tempoSalvo = parseInt(localStorage.getItem("tempoSessao"));
let tempo = isNaN(tempoSalvo) || tempoSalvo <= 0 ? 120 : tempoSalvo; // default 2 min
let tempoInicial = tempo;

let intervalo = null;
let ultimoMsg = -1;
let ultimoDesafio = -1;

// Áudio
const player = document.getElementById("audioPlayer");
let tipoAudio = "off"; // por padrão

// =============================
// ===== MENSAGENS =========
// =============================

const mensagens = [
  "Respire fundo...",
  "Mantenha o foco...",
  "Seu cérebro está evoluindo...",
  "Concentre-se no presente...",
  "Evite distrações...",
  "Sua mente está ativa...",
  "Você está aprendendo...",
  "Continue firme...",
  "Seu foco aumenta...",
  "Você está no controle..."
];

const desafios = [
  "Você consegue",
  "Foque em você",
  "Você aprende fácil",
  "Supere-se",
  "Sua mente evolui",
  "Você está no controle",
  "Aprender é natural",
  "Você é capaz",
  "Seu foco aumenta",
  "Você domina isso",
  "Sua mente é forte",
  "Continue avançando",
  "Você melhora sempre",
  "Confie em si",
  "Você vai conseguir",
  "Seu esforço vale",
  "Você cresce agora",
  "Mente ativa, foco total",
  "Você está evoluindo",
  "Nada te impede"
];

// =============================
// ===== FUNÇÃO ÁUDIO =====
// =============================

function setAudio(tipo) {
  tipoAudio = tipo;

  if (!player) return;

  if (tipo === "off") {
    player.pause();
    player.src = "";
  } else {
    player.src = "music/" + tipo + "hz.mp3";
    player.play().catch(err => console.log("Clique para ativar áudio", err));
  }

  // Atualiza botão ativo
  document.querySelectorAll(".audio-controls button").forEach(btn => {
    btn.classList.remove("ativo");
    if ((tipo === "off" && btn.innerText === "Off") || btn.innerText.includes(tipo)) {
      btn.classList.add("ativo");
    }
  });
}

// =============================
// ===== FADE SUAVE =====
// =============================

function mostrarComFade(id, texto) {
  const el = document.getElementById(id);
  if (!el) return;

  el.classList.remove("show");
  el.classList.add("fade");

  setTimeout(() => {
    el.innerText = texto;
    el.classList.add("show");
  }, 200);
}

// =============================
// ===== DISPLAY + LÓGICA =====
// =============================

function atualizarDisplay() {
  let minutos = Math.floor(tempo / 60);
  let segundos = tempo % 60;

  document.getElementById("timer").innerText =
    (minutos < 10 ? "0" + minutos : minutos) + ":" +
    (segundos < 10 ? "0" + segundos : segundos);

  let tempoDecorrido = tempoInicial - tempo;

  // 🔹 Mensagem a cada 3s
  if (tempoDecorrido > 0 && tempoDecorrido % 3 === 0 && ultimoMsg !== tempoDecorrido) {
    let msg = mensagens[indexMensagem];
    indexMensagem = (indexMensagem + 1) % mensagens.length;
    mostrarComFade("mensagemFoco", msg);
    ultimoMsg = tempoDecorrido;
  }

  // 🔹 Mini-desafio a cada 1s
  if (tempoDecorrido > 0 && ultimoDesafio !== tempoDecorrido) {
    let desafio = desafios[indexDesafio];
    indexDesafio = (indexDesafio + 1) % desafios.length;
    mostrarComFade("miniDesafio", desafio);
    ultimoDesafio = tempoDecorrido;
  }
}

// =============================
// ===== TIMER =====
// =============================

function startTimer() {
  if (intervalo !== null) return; // evita múltiplos cliques

  // Começa áudio se já tiver selecionado
  if (tipoAudio !== "off") {
    setAudio(tipoAudio);
  }

  atualizarDisplay(); // mostra tempo inicial antes de começar
  intervalo = setInterval(() => {
    tempo--;
    if (tempo >= 0) {
      atualizarDisplay();
    } else {
      clearInterval(intervalo);
      window.location.href = "exercicios.html";
    }
  }, 1000);
}

// =============================
// ===== INICIALIZAÇÃO =====
// =============================

// Mostra tempo inicial e mensagem sem iniciar cronômetro
document.addEventListener("DOMContentLoaded", () => {
  atualizarDisplay();
});