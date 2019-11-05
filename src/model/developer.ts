export class Developer{
    id : string;
    sobrenome : string;
    nome : string;
    funcao : string;
    telefone : string;
    email : string;

    
    setDeveloper(obj : any, id : any){
        this.id = id;
        this.sobrenome = obj.sobrenome;
        this.nome = obj.nome;
        this.funcao = obj.funcao;
        this.telefone = obj.telefone;
        this.email = obj.email;

    }
}