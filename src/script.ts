import { Felino } from "./Felino";
import { Leao } from "./Leao";

const felino: Felino = new Felino();
const simba: Leao = new Leao ('Simba');

felino.emitSound('Rawwwrrr');
simba.emitSound('Roaaaaarr');
simba.caca('Javali');
simba.caca('Zebra', 12);
simba.caca('Girafa', 1, 'Mamífero');

const leoes: Leao[ ] = [ ];

// ########### PROGRAMAÇÃO DECLARATIVA (push) ################ // 
//leoes.push(simba); // push - adiciona dentro do vetor em qualquer posição//

const leao1 = new Leao ('Scar');
const leao2 = new Leao ('Mufasa');
const leao3 = new Leao ('Kofu');


leoes.push (simba, leao1, leao2, leao3);
leoes.pop() // pop - função para tirar elemento do vetor //

//forEach - percorre o vetor (vai ver os leoes)
leoes.forEach((leao) =>  {  // <-- para cada leao no vetor de leoss // 
    console.log(leao.name) // <-- vai exibir os leoes //
}) 

console.log(leoes[0].name);