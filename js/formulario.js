function verResultado(){
    const form = document.forms['formulario'];
    let total = 0;

    for (let i = 1; i<=10; i++){
        const respuesta = form ['p'+ i]?.value;
        if(!respuesta){
            document.getElementById("resultado").textContent = "Responde todas las preguntas";
            return;
        }
        total +=parseInt(respuesta);
    }
    let resultadoTexto ="";

    if (total >= 50){
        resultadoTexto="Deberias de escuchar a Charli XCX";
    } else if (total >= 36){
        resultadoTexto="Deberias de escuchar a BadGyal";
    } else{
        resultadoTexto="Deberias de escuchar a Dellafuente";
    }

    document.getElementById("resultado").textContent = resultadoTexto;
}