document.getElementById("Acceder").addEventListener("click", (e) => {
    var plantilla = document.getElementById("alerta")
    var correo = document.getElementById("correo_l").value
    var contrasena_local = document.getElementById("password_l").value
    if (correo && contrasena_local) {
        fetch(`http://localhost:3000/api/busqueda/${correo}`, {
            method: "GET"
        })
            .then(response => response.json())
            .then(data => {
                if (data.length == 1) {
                    if (data[0]["contrasena"] == contrasena_local) {
                        console.log("Sesion iniciada")
                        sessionStorage.setItem("correo",correo)
                        correo = document.getElementById("correo_l").value = ""
                        contrasena_local = document.getElementById("password_l").value = ""
                    } else {
                        plantilla.innerHTML = `<div class="row">
                    <div class="col-3">
                        <svg style="margin-left: auto; margin-right:auto; margin-top:5%; display:block;" xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-exclamation-diamond-fill" viewBox="0 0 16 16">
                            <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                          </svg>
                    </div>
                    <div class="col-6">
                        <p style="color: red; font-size: x-large;">Se produjo un error</p>
                        <div id="alerta_contenido">
                            Contraseña incorrecta
                        </div>
                    </div>
                </div>`
                        plantilla.style.display = "block"
                        setTimeout(function () {
                            plantilla.style.display = "none"
                        }, 2000)
                    }

                } else {
                    plantilla.innerHTML = `<div class="row">
                    <div class="col-3">
                        <svg style="margin-left: auto; margin-right:auto; margin-top:5%; display:block;" xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-exclamation-diamond-fill" viewBox="0 0 16 16">
                            <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                          </svg>
                    </div>
                    <div class="col-6">
                        <p style="color: red; font-size: x-large;">Se produjo un error</p>
                        <div id="alerta_contenido">
                            Sesion no encontrada
                        </div>
                    </div>
                </div>`
                    plantilla.style.display = "block"
                    setTimeout(function () {
                        plantilla.style.display = "none"
                    }, 2000)
                }
            })
            .catch(error => console.log(error))
    } else {
        plantilla.innerHTML = `<div class="row">
            <div class="col-3">
                <svg style="margin-left: auto; margin-right:auto; margin-top:5%; display:block;" xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-exclamation-diamond-fill" viewBox="0 0 16 16">
                    <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>
            </div>
            <div class="col-6">
                <p style="color: red; font-size: x-large;">Se produjo un error</p>
                <div id="alerta_contenido">
                    Rellene los datos
                </div>
            </div>
        </div>`
        plantilla.style.display = "block"
        setTimeout(function () {
            plantilla.style.display = "none"
        }, 2000)
    }

})

function issession(){
    var plantilla_nosesion = document.getElementById("nosesion")
    var plantilla_sesion = document.getElementById("inicio-sesion")
    if(sessionStorage.length == 0){
        plantilla_nosesion.style.display = "block"
        plantilla_sesion.style.display = "none"
    }else{
        plantilla_nosesion.style.display = "none"
        plantilla_sesion.innerHTML = `Ya esta logueado en el sistema ${sessionStorage.getItem("correo")}`
        plantilla_sesion.style.display = "block"
    }
}

issession()