export { };

// ==> Exemplo 01 -> Exemplo básico do uso do Type Object
const pessoa = {
  nome: 'Glaucia',
  sobrenome: 'Lemos',
  idade: 35,
  funcao: 'Cloud Advocate'
};

console.log(pessoa);

// ==> Exemplo 02 -> object como parâmetros de função (eles podem ser anônimos)
function onboarding01(funcionario: { nome: string }) {
  return 'Seja bem-vinda ' + funcionario.nome;
}

console.log(onboarding01({ nome: 'Glaucia Lemos' }));

// ==> Exemplo 03 -> object nomeados
interface Pessoa {
  nome: string;
  funcao: string;
}

function onboarding02(pessoa: Pessoa) {
  return (
    'Seja bem-vinda ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.'
  );
}

console.log(onboarding02({ nome: 'Glaucia Lemos', funcao: 'Cloud Advocate' }));

// ==> Exemplo 04 -> object como type alias
type Pessoa03 = {
  nome: string;
  funcao: string;
  linguagem: string;
}

function onboarding03(pessoa: Pessoa03) {
  return (
    'Seja bem-vinda ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.' +
    ' Você trabalhará com a linguagem ' +
    pessoa.linguagem +
    '.'
  );
}

console.log(onboarding03({ nome: 'Glaucia Lemos', funcao: 'Cloud Advocate', linguagem: 'JavaScript/Typescript' }));

// ==> Exemplo 05 -> usando optional no object
interface Pessoa04 {
  nome: string;
  funcao: string;
  linguagem: string;
  email?: string;
}

function onboarding04(pessoa: Pessoa04) {
  return (
    'Seja bem-vinda ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.' +
    ' Você trabalhará com a linguagem ' +
    pessoa.linguagem +
    '.'
  );
}

console.log(onboarding04({ nome: 'Glaucia Lemos', funcao: 'Cloud Advocate', linguagem: 'JavaScript/Typescript' }));