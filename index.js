function inverterString() {
  let inputValue = document.getElementById("stringValue").value;
  console.log(inputValue);

  // Dividir a string em um array de caracteres
  let arrayDeCaracteres = inputValue.split("");

  // Inicializar uma string vazia para armazenar a string invertida
  let stringInvertida = "";

  // Percorrer o array de trás para frente
  for (let i = arrayDeCaracteres.length - 1; i >= 0; i--) {
    // Adicionar cada caractere na ordem inversa à string invertida
    stringInvertida += arrayDeCaracteres[i];
  }

  criaElemento(stringInvertida);
}

function criaElemento(stringInvertida) {
  let elementoPai = document.getElementById("divResultado");
  let h3 = document.createElement("h3");
  h3.textContent = stringInvertida;
  elementoPai.appendChild(h3); //adiciona o nó de texto à nova div criada
}
