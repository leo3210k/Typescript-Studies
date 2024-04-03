export { };

// Informa o compilador sobre o tipo de uma variável
// Semelhante ao Type Casting, mas não reconstrói o código
// Palavra chave "<>" e "as"
// Type Assertion instrui o compilador a tratar um valor
// com o tipo especificado, não carrega conversão de tipo

// ==> Exemplo 01 - Type Assertions (as / < >)
function exibirPrecoFinal(preco: number, desconto: number, formato: boolean): number | string {
  const precoComDesconto = preco * (1 - desconto);

  return formato ? `R$ ${precoComDesconto}` : precoComDesconto;
}

// const descontoFinal = exibirPrecoFinal(100, 0.05, true) as string;
const descontoFinal = <number>exibirPrecoFinal(100, 0.05, false);
console.log(descontoFinal);

// ==> Exemplo 02 - Type Assertions

/*type Humano = {
  nome: string;
  idade: number;
  idioma: string;
}

const humano = {
  idade: 36,
  idioma: 'Português'
};

const humano_02 = humano as Humano;
console.log(humano_02.nome.toUpperCase());*/

/*type Humano = {
  nome: string;
  idade: number;
  idioma: string;
}

const humano = {
  idade: 36,
  idioma: 'Português'
};

const humano_02: Humano = humano;
console.log(humano_02.nome.toUpperCase());*/