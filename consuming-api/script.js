$(document).ready(function(){
    $("#rua").focusout(function(){
        var rua = $("#rua").val();
        //cep = cep.replace("-", "");

        var urlStr = "https://localhost:3008/"+ rua ;

        $.ajax({
            url : urlStr,
            type : "post",
            dataType :"json",
            success : function(data){
                console.log(data);

                $("#cep").val(data.cep);
                $("#bairro").val(data.bairro);
                $("#uf").val(data.uf);
                $("#cidade").val(data.localidade);

            },
            error : function(erro){
                console.log(erro)
            }
        });

    });

});