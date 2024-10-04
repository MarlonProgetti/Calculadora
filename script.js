let visor = document.getElementById("display");
let NoVisor = "";
function AtualizaVisor() {
  let numFormatado = NoVisor.replace(",", ".");
  visor.value = parseFloat(numFormatado)
    .toLocaleString("pt-BR")
    .replace(".", ",");
}

function inserirNum(valor) {
  NoVisor += valor;
  AtualizaVisor();
}

function Adicionar(valor) {
  NoVisor += valor;
  visor.value = NoVisor.replace(".", ",");
}

function AdicionarOp(valor) {
  NoVisor += valor;
  visor.value = NoVisor;
}

function Resultado() {
  if (NoVisor == "") {
    NoVisor = "Conta Inválida!";
    visor.value = NoVisor;
  } else {
    try {
      NoVisor = eval(NoVisor);
      NoVisor = parseFloat(NoVisor).toFixed(2);
      visor.value = parseFloat(NoVisor)
        .toLocaleString("pt-BR")
        .replace(",", ".");
    } catch (e) {
      visor.value = "ERRO!";
      NoVisor = "";
    }
  }
}

function Limpar() {
  NoVisor = "";
  visor.value = NoVisor;
}

function Apagar() {
  NoVisor = NoVisor.slice(0, -1);
  visor.value = NoVisor;
}

let footer = window.document.getElementById("footer");
footer.innerHTML += `\u{1F9D9}`;
