// ==> Exemplo 01: Numeric Enums (Enums Numérico)
// Cuidado ao usar o enum!!!
enum Idioma {
  'Português',
  'Inglês',
  'Japonês',
  'Italiano',
};

console.log(Idioma);

// ==> Exemplo 02: String Enums
// O livro Programming Typescript do Boris Cherny deixa claro que você pode até usar
// enum em string mas não é recomendado, procurar evitar
enum Idioma2 {
  'Português' = 'PT-BR',
  'Inglês' = 'ES',
  'Japonês' = 'JP',
  'Italiano' = 'IT'
}

console.log(Idioma2)

// ==> Exemplo 03: Como podemos acessar um valor de um Enum com uma chave: (usando o const)

const enum Comida {
  Hamburger,
  Massa,
  Pizza,
  Torta,
  Churrasco,
}

function comida(c: Comida) {
  return 'Comidas muito apetitosas!';
}

console.log(comida(Comida.Pizza));
console.log(comida(Comida.Churrasco));
// console.log(comida(5));


// ==> Exemplo 04: Quando usar enum?!
enum Tarefa {
  Todo,
  Progress,
  Done,
}

// Quando usar enum?!
const concluidaTarefa = {
  id: 1,
  status: Tarefa.Done,
  descricao: 'Parabéns! Tarefa concluída com sucesso!',
};

if (concluidaTarefa.status === Tarefa.Done) {
  console.log('Enviar e-mail: Tarefa Concluída!');
}