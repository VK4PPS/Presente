export class Pessoas{
    id : string;
    nomeGrupo : string;
    nome : string;
    presencas : string;
    atrasos: string;
    faltas : string;
    


    

    setPessoas(obj : any, id : any){
        this.id = id;
        this.nomeGrupo = obj.nomeGrupo;
        this.nome = obj.nome;
        this.presencas = obj.presencas;
        this.faltas = obj.faltas;
        this.atrasos = obj.atrasos;
    }
}