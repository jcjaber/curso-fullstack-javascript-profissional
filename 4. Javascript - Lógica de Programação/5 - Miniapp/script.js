let departureDateEntry = prompt("Digite a data de partida (formato DD/MM/YYYY)")

//Aqui espcifico para o Moment o formato da data que será digitada
let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

//Essa função moment() entrega a data atual
let today = moment()

//Função moment de mostrar a diferença entre as datas em milisegundos 1/1000s
let dateDiff = today - departureDate

//perguntar para o usuário qual formato gostaria de exibir
let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")

if(chosenOption == "1") {
    //Math é uma biblioteca imbutida com propriedades e métodos próprios. O método Math.round arredonda o número para o valor inteiro mais próximo.
    let secondsOfDeparture = Math.round(dateDiff / 1000) 
    alert("Tempo de vôo: " + secondsOfDeparture + " segundos")
} else if(chosenOption == "2") {
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert("Tempo de vôo: " + minutesOfDeparture + " minutos")
} else if(chosenOption == "3") {
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert("Tempo de vôo: " + hoursOfDeparture + " horas")
} else if(chosenOption == "4") {
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("Tempo de vôo: " + daysOfDeparture + " dias")
} else {
    alert("Opção inválida")
}