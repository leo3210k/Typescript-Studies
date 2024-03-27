// ==> Exemplo 01: Tipo Any
const a: any = 34;
const b: any = ['Glaucia'];

const result = a + b;
console.log(result);

// ==> Exemplo 02: Quando o tipo 'any' é inferido implícitamente
/*let frase;
frase = 'Oi, pessoal! Tudo bem?';

console.log(frase);*/

// ==> Exemplo 03: Quando devemos usar o tipo any?!

const formulario: { [campoFomulario: string]: any } = {
  nome: 'Glaucia',
  sobrenome: 'Lemos',
  idade: 34,
};

/*
{ [campoFormulario: string]: any }: Isso é uma notação de tipo em TypeScript que define o formato do objeto formulario. 
Essa notação é chamada de índice de assinatura. Aqui, está dizendo que o objeto terá chaves que são strings 
(representadas por [campoFormulario: string]) e valores de qualquer tipo (representados por any).
> [campoFormulario: string]: Isso define que as chaves do objeto serão strings e são representadas pelo nome campoFormulario 
dentro dos colchetes.
> any: Isso significa que os valores associados às chaves do objeto podem ser de qualquer tipo.
*/

console.log(formulario);