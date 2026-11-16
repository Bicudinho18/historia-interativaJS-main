
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "A cidade tem pouco dinheiro. Onde investir primeiro?",
    alternativas: [
      {
        texto: "Educação.",
        afirmacao: [
          "A educação melhora a qualidade de vida da população.",
          "Investir em escolas prepara os jovens para o futuro."
        ]
      },
      {
        texto: "Saúde.",
        afirmacao: [
          "Investir na saúde garante melhor atendimento à população.",
          "Hospitais e postos de saúde bem equipados ajudam a prevenir doenças."
        ]
      }
    ]
  },
  {
    enunciado: "A cidade enfrenta falta de água.",
    alternativas: [
      {
        texto: "Investir em infraestrutura.",
        afirmacao: [
          "A construção de reservatórios melhora o abastecimento de água.",
          "A manutenção das tubulações evita desperdícios."
        ]
      },
      {
        texto: "Criar campanhas de conscientização.",
        afirmacao: [
          "As campanhas incentivam o uso consciente da água.",
          "A população aprende a evitar o desperdício."
        ]
      }
    ]
  },
  {
    enunciado: "Há muito lixo nas ruas.",
    alternativas: [
      {
        texto: "Aumentar a coleta.",
        afirmacao: [
          "A coleta frequente mantém as ruas limpas.",
          "A redução do lixo evita problemas de saúde pública."
        ]
      },
      {
        texto: "Investir em reciclagem.",
        afirmacao: [
          "A reciclagem diminui a quantidade de lixo nos aterros.",
          "A separação dos resíduos ajuda a preservar o meio ambiente."
        ]
      }
    ]
  },
  {
    enunciado: "O trânsito está piorando.",
    alternativas: [
      {
        texto: " Melhorar o transporte público.",
        afirmacao: [
          "O transporte público eficiente diminui o número de carros nas ruas.",
          "Mais ônibus e melhorias nas linhas ajudam a reduzir congestionamentos."
        ]
      },
      {
        texto: "Construir novas vias.",
        afirmacao: [
          "Novas vias podem melhorar a circulação de veículos.",
          "O planejamento das ruas ajuda a diminuir os congestionamentos."
        ]
      }
    ]

  },
  {
    enunciado: "Depois de quatro anos:",
    alternativas: [
      {
        texto: " A cidade ficou mais sustentável.",
        afirmacao: [
          "A cidade passou a utilizar melhor seus recursos naturais.",
          "Os investimentos ambientais melhoraram a qualidade de vida."
        ]
      },
      {
        texto: "A cidade melhorou economicamente, mas ainda enfrenta problemas ambientais.",
        afirmacao: [
          "A economia da cidade cresceu e gerou novas oportunidades.",
          "Ainda é necessário investir em ações para diminuir os problemas ambientais."
        ]
      }
    ]
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual>= perguntas.length){
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa))
    caixaAlternativas.appendChild(botaoAlternativa);
  }
}
function respostaSelecionada(opcaoSelecionada) {
  const afirmacao = aleatorio(opcaoSelecionada.afirmacao);
  historiaFinal += afirmacao + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado(){
  caixaPerguntas.textContent = "Em 2030 ...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

function aleatorio(lista){
  const posicao = Math.floor(Math.random()*lista.length);
  return lista[posicao];
}

mostraPergunta();
