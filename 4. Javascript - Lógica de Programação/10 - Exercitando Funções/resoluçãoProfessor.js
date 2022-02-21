alert("BEM VINDO AO CONTROLE DE BORDO!")
let spaceship = prompt("Insira o nome da nave: ")
let velocity = 0
let chosenOption

function boardControl () {
  let option  
  while(option != "1" && option != "2" && option != "3" && option != "4") { 
  option = prompt("### CONTROLE DE BORDO ###\n" +
                      "1 - Acelerar a nave em 5km/s\n" +
                      "2 - Desacelerar a nave em 5km/s\n" +
                      "3 - Imprimir dados de bordo\n" + 
                      "4 - Sair do programa")
  }             
  return option
}

function speedUp() {
  let newVelocity = velocity + 5
  return newVelocity
}

function slowDown() {
  let newVelocity = velocity - 5
  if(newVelocity < 0) {
    newVelocity = 0
  }
  return newVelocity
}

function printDataBoard(spaceship, velocity) {
  alert("Nome da nave: " + spaceship + "\nVelocidade atual: " + velocity + "km/s")
  return boardControl()
}

do {
  chosenOption = boardControl()
  switch(chosenOption){
    case '1':
      velocity = speedUp(velocity)
      break
    case '2':
      velocity = slowDown(velocity)
      break
    case '3':
      printDataBoard(spaceship, velocity)
      break
    case '4':
      alert("Encerrando programa de bordo")
  }
} while(chosenOption != '4')
