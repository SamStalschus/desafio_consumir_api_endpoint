$(document).ready(function(){
    $("#rua").focusout(function(){
        var rua = $("#rua").val();

        var urlStr = "http://localhost:3008/"+ rua ;

        $.ajax({
            url : urlStr,
            type : "post",
            dataType :"json",
            success : function(data){
                console.log(data);
                    try {
                        var i = 0;
                        while(data[i].localidade == "Aparecida de Goiânia"){
                            i++;
                        }
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