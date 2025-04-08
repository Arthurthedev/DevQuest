let usuario = {
    nome: "Arthur",
    excluir: function(){
        console.log(`O usuário ${this.nome} foi excluído.`);
    }
}
usuario.excluir()