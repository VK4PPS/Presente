export class Mensagens {
    id: string;
    nome: string;
    email: string;
    assunto: string;
    mensagem: string;


    setMensagem(obj: any, id: any) {
        this.id = id;
        this.nome = obj.name;
        this.email = obj.email;
        this.assunto = obj.assunto;
        this.mensagem = obj.mensagem;
    }
}
