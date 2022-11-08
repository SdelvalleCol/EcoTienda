//alertas
var plantilla_alertas_header = document.getElementById("alerta_modal")
//almacenamiento
var data_productos = []

//FUNCIONES

//FUNCION PRINCIPAL
async function main() {
    data_productos = []
    await fetch("http://localhost:3000/api/busqueda/nosql/productos").then(response => response.json())
        .then(data => {
            for (var i in data) {
                data_productos.push(data[i])
            }
            pintar(data_productos, 0, 12)
            pintar_paginacion()
            isloged()
        }).catch(e => console.log(e))
}

//BUSQUEDA 
async function filtro() {
    var str = document.getElementById("busqueda_str").value
    if (str.length >= 1) {
        await fetch(`http://localhost:3000/api/busqueda/nosql/productos/filtro/${str}`).then(response => response.json())
            .then(data => {
                if (data.length == 0) {
                    plantilla_alertas_header.innerHTML = `No encontramos ningún producto con esas caracteristicas`
                    plantilla_alertas_header.style.display = "flex"
                    setTimeout(() => {
                        plantilla_alertas_header.style.display = "none"
                    }, 2000);
                    document.getElementById("busqueda_str").value = ""
                } else {
                    data_productos = []
                    for (var i in data) {
                        data_productos.push(data[i])
                    }
                    if (data_productos.length <= 12) {
                        pintar(data_productos, 0, data_productos.length)
                    } else {
                        pintar(data_productos, 0, 12)
                    }
                    pintar_paginacion()
                    document.getElementById("busqueda_str").value = ""
                }
            }).catch(e => console.log(e))
    } else {
        plantilla_alertas_header.innerHTML = `Digite algo para buscar`
        plantilla_alertas_header.style.display = "flex"
        setTimeout(() => {
            plantilla_alertas_header.style.display = "none"
        }, 3000);
        sessionStorage.clear()
    }
}

async function filtrar_precios_precio() {
    const collection = document.getElementsByClassName("input_rango_filtro");
    if (collection[0].value != "" && collection[1].value != "") {
        await fetch(`http://localhost:3000/api/busqueda/nosql/productos/filtro/precio/${collection[1].value}/${collection[1].value}`)
            .then(res => res.json()).then(data => {
                if (data.length == 0) {
                    plantilla_alertas_header.innerHTML = `No encontramos ningún producto en ese rango de precios`
                    plantilla_alertas_header.style.display = "flex"
                    setTimeout(() => {
                        plantilla_alertas_header.style.display = "none"
                    }, 2000);
                    collection[0].value = ""
                    collection[1].value = ""
                } else {
                    data_productos = []
                    for (var i in data) {
                        data_productos.push(data[i])
                    }
                    if (data_productos.length <= 12) {
                        pintar(data_productos, 0, data_productos.length)
                    } else {
                        pintar(data_productos, 0, 12)
                    }
                    pintar_paginacion()
                    collection[0].value = ""
                    collection[1].value = ""
                }
            }).catch(e => {
                if (e) {
                    console.log(e)
                }
            })
    } else {
        plantilla_alertas_header.innerHTML = `Tiene que digitar un mínimo y un máximo`
        plantilla_alertas_header.style.display = "flex"
        setTimeout(() => {
            plantilla_alertas_header.style.display = "none"
        }, 2000);
    }
}

//GESTIONAR CUENTA
function borrarsession() {
    var plantilla = document.getElementById("cuenta_modal_acc")
    plantilla.style.display = "none"
    plantilla_alertas_header.innerHTML = `Hasta pronto ${sessionStorage.getItem("correo")}`
    plantilla_alertas_header.style.display = "flex"
    setTimeout(() => {
        plantilla_alertas_header.style.display = "none"
    }, 3000);
    sessionStorage.clear()
}

function isloged() {
    if (sessionStorage.length > 0) {
        plantilla_alertas_header.innerHTML = `Bienvenido ${sessionStorage.getItem("correo")}`
        plantilla_alertas_header.style.display = "flex"
        setTimeout(() => {
            plantilla_alertas_header.style.display = "none"
        }, 3000);
    }
}

//FUNCIONES FAVORITOS
async function nofavsql(id) {
    correo = sessionStorage.getItem("correo")
    await fetch(`http://localhost:3000/api/borrar/favoritos/${id}/${correo}`, { method: "POST" }).then(c => {
        var plantilla = document.getElementById("fav_producto")
        plantilla.style.display = "none"
        plantilla_alertas_header.innerHTML = "Se ha quitado de favoritos el producto"
        plantilla_alertas_header.style.display = "flex"
        setTimeout(() => {
            plantilla_alertas_header.style.display = "none"
        }, 2000);
    })
        .catch(e => {
            if (e) {
                console.log(e)
            }
        })
}

async function fav(id) {
    if (sessionStorage.length != 0) {
        for (var i = 0; i < data_productos.length; i++) {
            if (data_productos[i]["id"] == id) {
                var correo = sessionStorage.getItem("correo")
                await fetch(`http://localhost:3000/api/busqueda/favoritos/${id}/${correo}`, { method: "GET" }).then(res => res.json())
                    .then(data_fav => {
                        if (data_fav.length == 0) {
                            fetch(`http://localhost:3000/api/ingresarfav/${id}/${correo}`, { method: "POST" }).then(da => {
                                plantilla_alertas_header.innerHTML = "Se ha agregado el producto a favoritos"
                                plantilla_alertas_header.style.display = "flex"
                                setTimeout(() => {
                                    plantilla_alertas_header.style.display = "none"
                                }, 2000);
                            }).catch(e => console.log(e))
                        } else {
                            plantilla_alertas_header.innerHTML = "Ya lo tienes como favoritos"
                            plantilla_alertas_header.style.display = "flex"
                            setTimeout(() => {
                                plantilla_alertas_header.style.display = "none"
                            }, 2000);
                        }
                    })
                break
            }
        }
    } else {
        plantilla_alertas_header.innerHTML = "Por favor , inicie sesión"
        plantilla_alertas_header.style.display = "flex"
        setTimeout(() => {
            plantilla_alertas_header.style.display = "none"
        }, 2000);
    }
}

//Paginacion
function paginacion_scroll(indice) {
    var indice_final = (indice) * 12
    if (data_productos.length < indice_final) {
        pintar(data_productos, (indice_final - 12), data_productos.length)
    } else if (data_productos.length > indice_final) {
        pintar(data_productos, (indice_final - 12), (indice_final))
    }


}

function pintar_paginacion() {
    var plantilla_paginacion = document.getElementById("paginacion_bor")
    plantilla_paginacion.innerHTML = ""
    var cantidad = Math.ceil(data_productos.length / 12)
    for (var i = 0; i < cantidad; i++) {
        plantilla_paginacion.innerHTML += `<button onclick="paginacion_scroll(${i + 1})">${i + 1}</button>`
    }
}

//Ver detalle producto
async function detallesproducto(id) {
    var plantilla = document.getElementById("detalles_producto")
    var plantilla_cuerpo = document.getElementById("modal_cuerpo_detalle")
    await fetch(`http://localhost:3000/api/busqueda/nosql/${id}`).then(res => res.json()).then(data => {
        plantilla_cuerpo.innerHTML = `<div class="col-5">
        <img src="${data[0]["img"]}" class="img-producto-detalle" alt="">
    </div>
    <div class="col-7" style="padding: 3%;">
        <div class="row">
            <div class="col-8">
                <p class="texto_producto_detalles">${data[0]["name"]}</p>
                <p class="descripcion_detalle_pi">${data[0]["quantity"]}</p>
                <p class="descripcion_detalle_pi" style="color:#5ccb5f ; font-size:x-large">$ ${data[0]["price"]}</p>
            </div>
            <div class="col-4">
                <button onclick="fav(${data[0]["id"]})" class="nobtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                        class="bi bi-heart" viewBox="0 0 16 16">
                        <path
                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="contenido_detalle_producto">
            ${data[0]["description"]}
        </div>
        <div class="row">
            <div class="col-4">
                <input class="inputcantidad" type="number" name="" id="">
            </div>
            <div class="col-8">
                <button onclick="anadir_canasta(${data[0]["id"]})" class="botones_orange_detalle">
                    <svg style="margin-right: 5%;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
                        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
                      </svg>Añadir a la canasta
                </button>
            </div>
        </div>
    </div>`
    plantilla.style.display = "block"
    }).catch(e => {
        if (e) {
            console.log(e)
        }
    })
}

//Canasta
async function anadir_canasta(id){
    await fetch(`http://localhost:3000/api/busqueda/nosql/${id}`).then(res => res.json())
    .then(data => {
        
    }).catch(e=>{
        if(e){
            console.log(e)
        }
    })
}

//Imprimir
function pintar(data, indice, indice_maximo) {
    var plantilla = document.getElementById("plantilla_productos")
    plantilla.innerHTML = ""
    for (var i = indice; i < indice_maximo; i++) {
        if (data[i]["discount"] == true) {
            plantilla.innerHTML += `<div class="col-3 principal">
        <div class="circulo">
            <div class="promo_cir">
                ${data[i]["discVal"]}%
            </div>
        </div>

        <div class="corazon-producto-org">
            <button onclick="fav(${data[i]["id"]})" class="nobtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-heart" viewBox="0 0 16 16">
                    <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
            </button>

        </div>
        <div>
            <img src="${data[i]["img"]}" alt="" class="img-producto">
        </div>
        <div class="texto_producto_org" style="font-weight: bolder; margin-bottom: 3%;">
            ${data[i]["name"]}
        </div>
        <div class="texto_producto_org" style="font-size: small; color: gray; width: 30%;">
            ${data[i]["quantity"]}
        </div>
        <div class="texto_producto_org"
            style="font-size:medium ; color: rgb(100, 98, 98); margin-top:-3% ; margin-bottom: 3%;">
            ${data[i]["quantity"]}
        </div>
        <div class="texto_producto_org" style="font-size: x-large; color: #5ccb5f;">
            $ ${data[i]["price"]}
        </div>
        <button onclick = "detallesproducto(${data[i]["id"]})" class="botones_orange">
            <svg style="margin-right: 5%;" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                <path
                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
            </svg>Añadir a la cesta
        </button>
    </div>`
        } else {
            plantilla.innerHTML += `<div class="col-3 principal">
            <div class="corazon-producto-org">
                <button onclick="fav(${data[i]["id"]})" class="nobtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-heart" viewBox="0 0 16 16">
                        <path
                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                </button>
    
            </div>
            <div>
                <img src="${data[i]["img"]}" alt="" class="img-producto">
            </div>
            <div class="texto_producto_org" style="font-weight: bolder; margin-bottom: 3%;">
                ${data[i]["name"]}
            </div>
            <div class="texto_producto_org" style="font-size: small; color: gray; width: 30%;">
                ${data[i]["quantity"]}
            </div>
            <div class="texto_producto_org"
                style="font-size:medium ; color: rgb(100, 98, 98); margin-top:-3% ; margin-bottom: 3%;">
                ${data[i]["quantity"]}
            </div>
            <div class="texto_producto_org" style="font-size: x-large; color: #5ccb5f;">
                $ ${data[i]["price"]}
            </div>
            <button onclick="detallesproducto(${data[i]["id"]})" class="botones_orange">
                <svg style="margin-right: 5%;" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                    <path
                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                </svg>Añadir a la cesta
            </button>
        </div>`
        }
    }
}

//eventos
document.getElementById("btn_abrir_cta").addEventListener("click", (e) => {
    var plantilla = document.getElementById("cuenta_modal_acc")
    if (sessionStorage.length > 0) {
        plantilla.innerHTML = `<div class="btn-group-vertical" style="width: 100%;">
        <button class="modal_contenido_div">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>   Mi cuenta
        </button>
        <hr class="hr_style ">
        <button class="modal_contenido_div">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"/>
            </svg>   Mis favoritos
        </button>
        <hr class="hr_style ">
        <button class="modal_contenido_div">
            <svg id="cta_carrito" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
            </svg>   Mi carrito
        </button>
        <hr class="hr_style ">
        <button onclick="borrarsession()" class="modal_contenido_div">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
        </svg>   Cerrar cuenta
            </button>
        </div>`
    } else {
        plantilla.innerHTML = `<div class="btn-group-vertical" style="width: 100%;">
        <button class="modal_contenido_div">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
        </svg>   <a href="/usuario/login">Entrar</a>
        </button>
        <hr class="hr_style ">
        <button class="modal_contenido_div">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
        </svg>   <a href="/usuario/register">Crear cuenta</a>
        </button>
        </div>`
    }
    if (plantilla.style.display == "flex") {
        plantilla.style.display = "none"
    } else {
        plantilla.style.display = "flex"
    }
})

document.getElementById("abrir_fav").addEventListener("click", (e) => {
    if (sessionStorage.length != 0) {
        var plantilla = document.getElementById("fav_producto")
        plantilla.style.display = "block"
        var plantilla_cuerpo = document.getElementById("cuerpo_modal_fav")
        plantilla_cuerpo.innerHTML = ""
        var correo = sessionStorage.getItem("correo")
        fetch(`http://localhost:3000/api/busqueda/favoritos/${correo}`).then(respon => respon.json())
            .then(data => {
                plantilla_cuerpo.innerHTML = `<p class="titulo_modal_fav">
                Tus favoritos
            </p>`
                for (i in data) {
                    fetch(`http://localhost:3000/api/busqueda/nosql/${data[i]["id_producto"]}`).then(rs => rs.json())
                        .then(subdata => {
                            plantilla_cuerpo.innerHTML += `<div class="row">
                    <div class="col-4">
                        <img src="${subdata[0]["img"]}" alt="" class="img-producto-fav">
                    </div>
                    <div class="col-5 contenido_favorito_txt">
                            ${subdata[0]["name"]}
                    </div>
                    <div class="col-3 contenido_favorito_txt">
                        <button onclick="nofavsql(${subdata[0]["id"]})" class="nobtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-trash2" viewBox="0 0 16 16">
                                <path d="M14 3a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2zM3.215 4.207l1.493 8.957a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836l1.493-8.957C11.69 4.689 9.954 5 8 5c-1.954 0-3.69-.311-4.785-.793z"/>
                              </svg>
                        </button>
                    </div>
                </div>`
                        })
                }
            })
    } else {
        plantilla_alertas_header.innerHTML = "Debes iniciar sesión"
        plantilla_alertas_header.style.display = "flex"
        setTimeout(() => {
            plantilla_alertas_header.style.display = "none"
        }, 2000);
    }
})

main()
