// Pode conter declarações e código
// Executado dentro do seu próprio escopo
// Eles não são visíveis fora do módulo
// Usando instrução 'import'

import { EmailValidator, ZipCodeValidator } from "./validators";

let email = 'glaucia.lemos@email.com';
let validator = new EmailValidator();
let result = validator.isValid(email);

console.log(`O e-mail ${email} é válido? ${result}`);

let validator2 = new ZipCodeValidator();
let result2 = validator2.isValid('12345');

console.log(`O CEP 12345 é válido? ${result2}`);