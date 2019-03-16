$(document).ready(function(){
    start();
    $('#size').keypress(function (e) {
        if (e.which == 13) {
            if(e.keyCode == 13)
            {
                $("#data").empty();
                if($("#size").val()>=10 && $("#size").val()<=1000){
                    for (let index = 1; index <= $("#size").val(); index++) {
                        $("#data").append('<div class="content">'+index+'</div>');
                    }
                }else{
                    alert("Fuera de rango");
                }
            }
        }
      });

    $('#dummy').css('background-color','white');

    buttons(2,"red")
    buttons(3,"blue")
    buttons(4,"yellow")
    buttons(5,"brown")
    buttons(6,"gray")
    buttons(7,"cyan")
    buttons(8,"purple")
    buttons(9,"green")

    $("#limpiar").click(function() {
        for (let index = 0; index < $("#size").val(); index++) {
            $("#data").find("div").eq(index).css("background-color","white");
        }
    })
    
    $("#np").click(function() {
        for (let index = 0; index < $("#size").val(); index++) {
            var c1 =$("#dummy").css("background-color");
            var c2 = $("#data").find("div").eq(index).css("background-color");

            var cont=0;
            for (let num = 0; num < $("#size").val(); num++) {
                if((index+1)%num==0){
                    cont++;
                }
            }
            if(cont==2 && (c1==c2)){
                $("#data").find("div").eq(index).css("background-color","teal");
            }
            console.log(cont);
        }
    })

    function buttons(valor,color){
        $("#m"+valor).click(function(){
            for (let index = 0; index < $("#size").val(); index++) {
                var c1 =$("#dummy").css("background-color");
                var c2 = $("#data").find("div").eq(index).css("background-color");
                if((index+1)%valor==0 && (c1==c2)){
                    $("#data").find("div").eq(index).css("background-color",color);
                }
            }
        })
    }
    function start(){
        for (let index = 1; index <= $("#size").val(); index++) {
            $("#data").append('<div class="content">'+index+'</div>');
        }
    }
  });