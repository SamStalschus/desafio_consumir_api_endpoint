$(document).ready(function(){ //executa quando a pag for carregada via jquery
    $("#rua").focusout(function(){ /*Função para quando o usuário  perder o foco*/
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
                        while(data[i].localidade == "Aparecida de Goiânia"){ //para parar de incluir aparecida de Goiânia nas buscas
                            i++;
                        }
                        $("#cep").val(data[i].cep);             //preenche o valor com o valor obtido na req
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
                // //cria um alerta para caso de erro
            }
        });

    });

    function limparDados(){
        $("#cep").val(null);        //limpa os dados
        $("#bairro").val(null);
        $("#uf").val(null);
        $("#cidade").val(null);
        $("#rua").val(null);
    }
});