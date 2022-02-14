let olderPersonName = prompt("Qual o nome da pessoa mais velha?")
let olderPersonAge = prompt("Qual a idade da pessoa mais velha?")
let youngerPersonName = prompt("Qual o nome da pessoa mais nova?")
let youngerPersonAge = prompt("Qual a idade da pessoa mais nova?")
let ageDifference = olderPersonAge - youngerPersonAge
alert(
    "Pessoa mais vellha: " + olderPersonName + "\nIdade: " + olderPersonAge +
    "\n\nPessoa mais nova: " + youngerPersonName + "\nIdade: " + youngerPersonAge +
    "\n\nA diferença de idade entre elas é de " + ageDifference + " anos.")