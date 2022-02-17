alert("#### BEM-VINDO AO OCULTADOR DE NOMES 2.0 ####\nCUIDADO: este ocultador é sensível a letra 'e'");


let word = prompt("Digite o nome que deseja ocultar: ");
let newWord = '';

for(i = word.length - 1; i >= 0; i--) {
  if(word[i] == 'e') {
    break
  }
  newWord += word[i];
}

alert("Nome original: " + word + "\nNome após a ocultação: " + newWord.toLocaleUpperCase());