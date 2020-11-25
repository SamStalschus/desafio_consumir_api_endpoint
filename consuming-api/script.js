$(document).ready(function(){
    $("#rua").focusout(function(){ /*Função para quando o usuário  perder o foco*/
        var rua = $("#rua").val();

        var urlStr = "http://localhost:3008/"+ rua ;

        $.ajax({
            url : urlStr,
            type : "post",
            dataType :"json",
            success : function(data){
                console.log(data);

                $("#cep").val(data[0].cep);
                $("#bairro").val(data[0].bairro);
                $("#uf").val(data[0].uf);
                $("#cidade").val(data[0].localidade);

            },
            error : function(erro){
                console.log(erro)
                alert("Rua inexistente em Goiânia");
            }
        });

    });

});