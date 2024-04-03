export { };

/*
// O operador satisfies informa se um determinado tipo satisfaz uma 
// condição específica – e fornece essas informações antes de executar 
// seu código. Além disso, ao usá-lo, você pode declarar uma nova variável 
// para verificar se o tipo de uma expressão corresponde a outro tipo.
*/

// ==> Exemplo 01: Satisfies Operator
type Cidade = NomeCidade | CidadeCoordenadas;

type NomeCidade = "São Paulo" | "Rio de Janeiro" | "Salvador" | "Belo Horizonte";

type CidadeCoordenadas = {
  x: number;
  y: number;
};

type Pessoa = {
  localNascimento: Cidade;
  residenciaAtual: Cidade;
};

const pessoa = {
  localNascimento: "Rio de Janeiro",
  residenciaAtual: { x: 10, y: 20 },
} satisfies Pessoa

console.log(pessoa.localNascimento.toUpperCase());

// ==> Exemplo 02: Satisfies Operator
type Connection = {};

declare function createConnection(
  host: string,
  port: string,
  reconnect: boolean,
  poolsize: number
): Connection;

type Configuration = {
  host: string;
  port: string | number;
  tryReconnect: boolean | (() => boolean);
  poolSize?: number;
};

const config = {
  host: "localhost",
  port: 3306,
  tryReconnect: () => true,
  poolSize: 10,
} satisfies Configuration;

function connect() {
  let { host, port, tryReconnect } = config;

  createConnection(host, `${port}`, tryReconnect(), 10);
}