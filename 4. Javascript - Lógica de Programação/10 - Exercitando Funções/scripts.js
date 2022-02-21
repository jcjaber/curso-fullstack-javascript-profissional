alert("BEM VINDO AO CONTROLE DE BORDO!")
let spaceship = prompt("Insira o nome da nave: ")
let velocity = 0
boardControl()

function boardControl () {
  let option = prompt("### CONTROLE DE BORDO ###\n 1 - Acelerar a nave em 5km/s\n2 - Desacelerar a nave em 5km/s\n3 - Imprimir dados de bordo\n4 - Sair do programa")

  switch(option) {
    case '1':
      speedUp()
      break
    case '2':
      slowDown()
      break
    case '3':
      printDataBoard()
      break
    case '4':
      alert("Saindo...")
      break
    default:
      alert("Opção inválida!")
      return boardControl()
  }
}

function speedUp() {
  velocity += 5
  alert("Acelerando 5km/s\nVelocidade atual é de " + velocity + "km/s")
  return boardControl()
}

function slowDown() {
  velocity -= 5
  if(velocity < 0) {
    velocity = 0
  }
  alert("Desacelerando 5km/s\nVelocidade atual é de " + velocity + "km/s")
  return boardControl()
}

function printDataBoard() {
  alert("Nome da nave: " + spaceship + "\nVelocidade atual: " + velocity + "km/s")
  return boardControl()
}
