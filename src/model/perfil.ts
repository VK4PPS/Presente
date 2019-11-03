export class Perfil{
    nome: string;
    email: string;
    sobrenome: string;
    telefone: string;
    
    setPerfil(obj: any){
        this.nome = obj.nome;
        this.sobrenome = obj.sobrenome;
        this.telefone = obj.telefone;
        this.email = obj.email;
    }
}