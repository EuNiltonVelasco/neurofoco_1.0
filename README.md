NeuroFoco - README

Projeto: NeuroFoco
Versão: 1.0
Autor: [Nilton Velasco]
Data: 2026-04-03

===========================================================
1. DESCRIÇÃO DO PROJETO
===========================================================

O NeuroFoco é um aplicativo web educativo e motivacional que combina técnicas de foco, 
exercícios de programação e estímulos auditivos baseados em frequências binaurais 
para auxiliar no desenvolvimento cognitivo, concentração e neuroplasticidade. 

O projeto possui três módulos principais:

1. Página inicial (index.html) - permite iniciar a sessão de foco.
2. Sessão de foco (sessao.html) - apresenta cronômetro, mensagens motivacionais e áudios binaurais.
3. Exercícios de lógica (exercicios.html) - quiz interativo de programação básica.

O sistema utiliza HTML, CSS e JavaScript puro, sem frameworks externos, priorizando 
simplicidade, desempenho e portabilidade.

===========================================================
2. ESTRUTURA DO PROJETO
===========================================================

NeuroFoco/
│
├─ index.html          # Página inicial
├─ html/
│   ├─ sessao.html     # Página da sessão de foco
│   └─ exercicios.html # Página do quiz/exercícios
│
├─ js/
│   ├─ index.js        # Lógica do botão START da página inicial
│   ├─ sessao.js       # Cronômetro, mensagens e áudios binaurais
│   └─ exercicios.js   # Quiz de lógica e verificação de respostas
│
├─ css/
│   └─ style.css       # Estilo global do projeto
│
├─ music/              # Sons binaurais
│   ├─ 432hz.mp3
│   ├─ 528hz.mp3
 |    ├─ 528hz.mp3
│   └─ 741hz.mp3
│
├─ img/
│   └─ logo.png
│
└─ README.txt          # Documentação do projeto

===========================================================
3. LÓGICA DO PROJETO
===========================================================

1. Página Inicial:
- Botão "START" define o tempo da sessão no localStorage.
- Redireciona para sessao.html somente após o clique.

2. Sessão de Foco:
- Cronômetro regressivo baseado no tempo armazenado.
- Mensagens motivacionais sequenciais exibidas a cada 3 segundos.
- Mini-desafios exibidos a cada segundo, com fade suave.
- Áudios binaurais ativados via botões e controlados pelo <audio> HTML.
- Lógica do cronômetro garante que as mensagens e mini-desafios não se repitam.

3. Exercícios de Lógica:
- Quiz de múltipla escolha.
- Perguntas armazenadas em um array de objetos com:
  - pergunta (string)
  - opcoes (array de strings)
  - correta (índice da opção correta)
- Função de verificação compara a resposta do usuário com a opção correta.
- Feedback imediato: acerto ou erro.
- Pontuação cumulativa armazenada localmente (opcional).

===========================================================
4. PRINCÍPIOS DE NEUROCIÊNCIA APLICADOS
===========================================================

1. Neuroplasticidade:
- O projeto propõe atividades de foco e desafios cognitivos curtos para estimular 
  a reorganização neural e fortalecer conexões sinápticas.
- Mensagens motivacionais reforçam padrões de atenção e autoeficácia.

2. Frequências Binaurais:
- Áudios 432Hz, 528Hz e 741Hz utilizados como estímulos sonoros suaves.
- Estudos indicam que tons binaurais podem auxiliar na concentração e relaxamento, 
  melhorando a performance cognitiva durante exercícios mentais.

3. Técnica Pomodoro / Cronometragem:
- Uso de sessões temporizadas mantém o cérebro engajado em períodos curtos, 
  promovendo foco sustentado e evitando fadiga mental.

===========================================================
5. TECNOLOGIAS UTILIZADAS
===========================================================

- HTML5
- CSS3
- JavaScript (ES6)
- LocalStorage (armazenamento do tempo e configurações do usuário)
- Áudio HTML5 para reprodução de frequências binaurais

===========================================================
6. RECOMENDAÇÕES DE USO
===========================================================

- Utilize fones de ouvido para melhor percepção das frequências binaurais.
- Mantenha o ambiente livre de distrações para maximizar a eficácia das sessões.
- Siga a ordem:
  1. Abrir index.html
  2. Definir tempo e clicar START
  3. Acompanhar a sessão com mensagens motivacionais e áudio
  4. Realizar o quiz ao final

===========================================================
7. SUBINDO PARA GITHUB
===========================================================

- Subir toda a pasta do projeto mantendo a estrutura de diretórios.
- Incluir arquivos essenciais: index.html, html/, js/, css/, img/, music/, README.txt
- Não incluir arquivos temporários (.DS_Store, node_modules, cache de editor)
- Recomenda-se criar um .gitignore para ignorar arquivos desnecessários.

===========================================================
8. CONTATO
===========================================================

Desenvolvedor: [Nilton Velasco]
Email: [nillvelasco.dev@gmail.coml]

===========================================================