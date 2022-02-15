
alert("Bem-vindo ao ocultador de nomes!");

let oldName = prompt("Me diga qual nome gostaria de ocultar: ");

let charToReplace = prompt("Diga-me qual caracter gostaria de ocultar: ");

let replacementChar = prompt("Por qual caracter gostaria de substituir?");

let newName = "";

for (i=0; i < oldName.length; i++) {
  if(oldName[i] == charToReplace) {
    newName += replacementChar
  } else {
    newName += oldName[i]
  }
};

alert("Aqui está o nome ocultado: " + newName);