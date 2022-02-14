// CONVERSOR DE DISTÂNCIA ESPACIAL
// Author: José Cássio Jaber

  alert("#### CONVERSOR DE DISTÂNCIA ESPACIAL ####\nBem-vindo ao conversor de distância espacial!");

  let lyDistance = prompt("Qual a distância em anos luz que deseja converter?")

  let chosenOption = prompt("Escolha uma das opções de medida para a conversão:\n1 - Parsec (pc)\n2 - Unidade astronômica (AU) \n3 - Quilômetro (Km)\n\n(digite o número da opção desejada)")
  
  let chosenUnity
  let convertedDistance

  switch(chosenOption)  {
    case "1":
      chosenUnity = "Parsec";
      convertedDistance = lyDistance * 0.306601;
      break
    case "2":
      chosenUnity = "Unidade Astronômica";
      convertedDistance = lyDistance * 63241.1;
      break
    case "3":
      chosenUnity = "Quilômetros";
      convertedDistance = lyDistance * 9.5 * Math.pow(10, 12);
      break
    default:
      chosenUnity = "Unidade não identificada"
      convertedDistance = "Conversão fora do escopo"
    }

    alert("Distância em anos-luz: " + lyDistance + "\nDistância em " + chosenUnity + ": " + convertedDistance)



  
  