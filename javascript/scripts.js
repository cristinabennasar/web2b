

    var segundos = 0;
    //Definición de la funcion
    function temporizador(){
        segundos = segundos + 1;
        document.getElementById("contador").innerHTML = segundos;
    }


    function iniciar (){
         //SetInterval llama funcion temporizador cada 1000ms
    setInterval(temporizador, 1000);
    }

function parar(){
    clearInterval(); //para Temporizador
}