 //executa quando a pag for carregada via jquery
$(document).ready(function(){
     //Função para quando o usuário  perder o foco
    $("#rua").focusout(function(){
        var rua = $("#rua").val();

        var urlStr = "http://localhost:3008/"+ rua ;

        $.ajax({
            url : urlStr,
            type : "post",
            dataType :"json",
            success : function(data){ //se deu tudo certo com a req retorna data
                console.log(data);
                    try {
                        var i = 0;
                         //para parar de incluir aparecida de Goiânia nas buscas
                        while(data[i].localidade == "Aparecida de Goiânia"){
                            i++;
                        }
                        //preenche o valor com o valor obtido na req
                        $("#cep").val(data[i].cep);             
                        $("#bairro").val(data[i].bairro);
                        $("#uf").val(data[i].uf);
                        $("#cidade").val(data[i].localidade);
                        $("#rua").val(data[i].logradouro); 
                    } catch (error) {
                        alert("Rua não encontrada");
                        limparDados();
                    }
            },
            error : function(erro){
                console.log(erro)
            }
        });
    });
    //limpa os dados
    function limparDados(){
        $("#cep").val(null);        
        $("#bairro").val(null);
        $("#uf").val(null);
        $("#cidade").val(null);
        $("#rua").val(null);
    }
});