export { };

// Lista de parâmetros de tipo genérico
// Permite escrever um código mais flexível e reutilizável

// ==> Exemplo 01: Generic Interfaces
interface Pair<T, U> {
  first: T;
  second: U;
}

const myPair: Pair<number, string> = {
  first: 36,
  second: 'Glaucia Lemos'
};

console.log(myPair); // Saída: { first: 36, second: 'Glaucia Lemos' }

// ==> Exemplo 02: Generic Interfaces
interface FetchResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>
}

async function fetchJson<T>(url: string): Promise<FetchResponse<T>> {
  const response = await fetch(url);
  const headers: Record<string, string> = {};
  response.headers.forEach((value, key) => {
    headers[key] = value;
  });

  const data = await response.json();
  return {
    data: data as T,
    status: response.status,
    statusText: response.statusText,
    headers
  };
}

(async () => {
  const response = await fetchJson<{ completed: boolean }>("https://jsonplaceholder.typicode.com/todos/1");
  console.log(response.data.completed)
})();