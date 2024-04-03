export = {};

// Combinação de vários tipos existentes
// O novo tipo possui todas as características do tipo existente

// ==> Exemplo 01 - Intersection Types:
interface DadosBancarios {
  conta: number;
  agencia: number;
  banco: string;
}

interface Cliente {
  nome: string;
  email: string;
}

interface DadosPessoaFisica {
  cpf: number;
}

type DadosCliente = DadosBancarios & Cliente & DadosPessoaFisica;

const dadosCliente: DadosCliente = {
  conta: 123456,
  agencia: 123,
  banco: "Banco do Brasil",
  nome: "Glaucia Lemos",
  email: "glaucia@email.com",
  cpf: 123456789,
}

console.log(dadosCliente)

// ==> Exemplo 02 - Intersection Types:
interface IEndereco {
  rua: string;
  bairro: string;
  cidade: string;
}

interface IPessoa {
  nome: string;
  idade: number;
  profissao: string;
}

type IEnderecoPessoa = IEndereco & IPessoa;

const enderecoPessoa: IEnderecoPessoa = {
  nome: 'Glaucia Lemos',
  idade: 36,
  profissao: 'Software Engineer',
  rua: 'Rua das Tulipas',
  bairro: 'Bairro das Tulipas',
  cidade: 'Rio de Janeiro',
};

console.log(enderecoPessoa);