/*ponemos dentro de una variable el objeto del formulario completo, obteniendolo a travez del ID*/
var loginForm = document.getElementById('loginForm'); 

/*funcion para cuando alguien haga un submit sel formulario*/
loginForm.onsubmit = function (event) {
    /* event se refiere al evento que estoy "escuchando"*/
    event.preventDefault(); //Previene el comportamiento por default de mi formulario

    //Obtener los datos del formulario / var formulario, crea el dicc q vamos a recibir
    var formulario = new FormData(loginForm);
    /*formulario = {
        "email": "elena@codingdojo.com",
        "password": "1234"
    }*/

    /*FETCH va por la info y me la regresa (promesa) / THEN recibe la resp y la pasa a json / DATA regresa el msj (var message)*/
    fetch('/login', { method:'POST', body: formulario })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.message == 'correcto') {
                //Si todo está correcto, me redirige a dashboard
                window.location.href = "/dashboard";
            } else {
                var mensajeAlerta = document.getElementById('mensajeAlerta');
                mensajeAlerta.innerHTML = data.message;

                //Formato de alerta con colores
                mensajeAlerta.classList.add('alert');
                mensajeAlerta.classList.add('alert-danger');

                /*alert(data.message); ..para poner los msj de alaerta, como msj alarte (ventana emergente) sacar el else*/
            }
        })      
}