import { Felino } from "./Felino";

class Leao extends Felino{ 
    public name: string;

    constructor (name: string) {
        super(); // invoca o construtor da superclasse // 
        this.name = name;
    }

    public emitSound(sound: string): void { // SOBREESCRITO //
        console.log(`Leão emite ${sound}`);
    }

    public caca (presa: string): void;
    public caca (presa: string, quantidade: number): void;
    public caca (presa: string, quantidade: number, tipoPresa: string): void;

    public caca (presa: string, quantidade?: number, tipoPresa?: string) { // ? - informação opcional//
            if(tipoPresa != undefined) { // undefined - valor não inserido // 
                console.log(`Leão está caçando um ${tipoPresa}`); 
            }
            const numPresas = (quantidade == undefined) ? 1: quantidade;
            console.log(`Leão está caçando ${numPresas} ${presa}`)

        }

}

export { Leao }

