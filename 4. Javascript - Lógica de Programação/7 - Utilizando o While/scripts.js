let warpCount = 0;

alert("Bem-vindos ao sistema de navegação da nave espacial!");

let spaceship = prompt("Por favor, insira o nome da nave.");

let chosenOption = prompt("Deseja entrar em uma dobra espacial?\n1- Sim\n2 - Não");

while(chosenOption == '1') {
  warpCount += 1;
  chosenOption = prompt("Deseja realizar mais uma dobra espacial?\n1- Sim\n2 - Não");
}
alert("Nome da nave: " + spaceship + "\nNúmero de dobras realizadas: " + warpCount)
