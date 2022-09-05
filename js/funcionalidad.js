class product {
    constructor(id, nombre, detalle, precio, precio_oferta, descripcion, imagen) {
        this.id = id
        this.nombre = nombre
        this.detalle = detalle
        this.precio = precio
        this.precio_oferta = precio_oferta
        this.descripcion = descripcion
        this.imagen = imagen
    }

    issale() {
        if (this.precio_oferta == 0) {
            return "No tiene oferta"
        } else {
            return this.precio_oferta
        }
    }
}
var data_favorito = []
var data_carrito = []
var data_principal = [new product(1, "Aceite esencial de Clavo", "12ml", 8, null, "El aceite esencial de clavo es conocido por sus increíbles propiedades antimicrobianas, antimicóticas, antisépticas, antivirales, afrodisíacas y estimulantes. Perfecto para utilizar en tus mezclas de Cosmética Natural, añadiendo unas cuantas gotas en tu crema corporal o aceite vegetal, conseguirás nutrir y lucir una piel radiante y 100% cuidado.", "../images/1.jpg"), new product(2, "Parches de Oro de 24 kt Rejuvenecedores para Contorno de Ojos", "60uds.", 15.50, [50, 3], "Parches de oro de 24 kt rejuvenecedores para contorno de ojos de Natura Siberica. Parches para ojos con efecto rejuvenecedor enriquecidos con oro de 24kt. Su acción descongestiona la piel, la suaviza y mejora su luminosidad.", "../images/2.jpg"), new product(3, "Parches Iluminadores para el Contorno de Ojos", "60uds.", 15.50, null, "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven \n Estos parches iluminadores son una solución rápida y cómoda para darle a tus ojos ese toque de luz y vitalidad que el estrés y la vida urbana les van quitando. Con su base de biome con activo postbiótico único y extractos fermentados de mora de los pantanos norteña y frambuesa silvestre ayudan al microbioma de la piel a aumentar su resistencia y mejorar su luminosidad. La vitamina C presente en su fórmula mejora el tono y la textura del contorno para ayudar a recuperar su brillo natural, y la niacinamida contribuye a fortalecer la barrera de hidratación de la epidermis, dando lugar a un resultado suave, esplendoroso y rejuvenecido.", "../images/3.jpg"), new product(4, "Parches Supertonificantes para Contorno de Ojos", "60uds.", 15.50, null, "Parches supertonificantes para contorno de ojos de Natura siberica. Parches para ojos con efecto tonificante que reducen visiblemente los signos de fatiga en la mirada y le aportan luz y vitalidad al instante. \n Estos parches supertonificantes son la solución definitiva para decir adiós a los signos de fatiga y la hinchazón en el contorno de los ojos. Basados en activo postbiótico único y extractos fermentados de mora de los pantanos norteña y frambuesa silvestre, crean sobre la mirada un efecto iluminador y energizante al instante. La cafeína presente en su fórmula ayuda a tensar las líneas finas y reducir la piel hinchada, mientras que la vitamina E genera un efecto regenerador que deja un aspecto descansado y revitalizado.", "../images/4.jpg"), new product(5, "6 Discos Desmaquillantes de Fibra Natural", "6uds.", 10.50, null, "Eliminan el maquillaje y limpian el rostro con suavidad. Elaborados en algodón y carbón de bambú. De doble cara y función: \n Limpieza diaria: elaborada en algodón ultrasuave es adecuada para productos líquidos. \n Exfoliante: combinación de algodón y carbón de bambú, de propiedades purificantes y desintoxicantes. Indicada para texturas cremosas y densas. \n Incluye 6 discos y una práctica bolsita de algodón para lavarlos ( máx. 30 grados) y guardarlos. No secar en secadora. \n Reúnen ahorro en otros productos de un solo uso (toallitas, discos de algodón) y máximo respeto por el medio ambiente. ", "../images/5.jpg"), new product(6, "Aceite anticelulítico de abedul", "100ml", 22.90, null, "El extracto de hojas de abedul contiene flavonoides y tanines, los cuales sirven para mantener y conservar el metabolismo y circulación de los líquidos en el cuerpo. Su función es dar firmeza, elasticidad y suavidad a la piel, previniendo y mejorando el estado de la misma. Por esta razón, previene y mejora la celulitis. No contiene ni sustancias químicas, ni colorantes, ni conservantes. Es apto para veganos y no está testado en animales.", "../images/6.jpg"), new product(7, "Aceite antiinflamatorio S.O.S Rescate", "30ml", 12.45, null, "Pequeñas heridas, quemaduras, golpes, cicatrices… ¿Cuántos productos diferentes estás usando para paliar estos accidentes? Pues a partir de ahora con uno sólo podrás calmar y regenerar tu piel y la de toda tu familia con S. O. S. Rescate, una extraordinaria mezcla de aceites vegetales y esenciales procedentes de agricultura ecológica.", "../images/7.jpg"), new product(8, "Aceite Bucal de Coco Orgánico Premium", "180ml", 9.60, [30, 1], "Oil Pulling de Dr. Goerg. El aceite bucal de coco orgánico premium de Dr. Goerg es fácil de usar y, gracias a sus ingredientes 100 % naturales enriquecidos con aceites esenciales de menta y eucalipto, garantiza una sensación en la boca limpia, agradable y fresca. Nuestro aceite bucal orgánico premium también es 100% vegano y está certificado como cosmético orgánico por Cosmos Organic . Si se usa regularmente antes de cepillarse los dientes, la extracción de aceite puede garantizar un aliento fresco y encías bien cuidadas a largo plazo. Al igual que con todos nuestros productos orgánicos premium, solo utilizamos las mejores materias primas de cultivos exclusivamente sostenibles para nuestro aceite de boca de coco orgánico premium.", "../images/8.jpg"), new product(9, "Aceite corporal blanco siberiano anticelulítico de Natura Siberica", "200ml", 6.95, null, "Este product te trae lo mejor para el cuidado de tu cuerpo gracias a las propiedades de la cera blanca de abeja, los aceites naturales y la schizandra. Regálate lo mejor para tu piel y disfruta de esta combinación que hidratará de forma eficaz las zonas de tu cuerpo que más lo necesite.", "../images/9.jpg"), new product(10, "Aceite corporal Body Sculptor", "", 73.70, null, "Aceite corporal que moldea el cuerpo y esculpe la silueta de forma natural y eficaz. Previene el exceso de peso y la retención de líquidos gracias a su acción drenante, activa la microcirculación a la vez que tonifica la piel. Esculpe tu cuerpo realizando tratamientos de forma diaria. Está formulado con aceites vegetales naturales adecuado para pieles sensibles.", "../images/10.jpg"), new product(11, "Aceite corporal de almendras dulces", "500ml", 10.45, null, "El Aceite de Almendras dulces es básico para una hidratación y nutrición de la piel. Puedes utilizarlo en todas las partes de tu cuerpo preferiblemente después de la ducha con la piel húmeda, para ayudar a su absorción llegando a las capas profundas de la piel. Un aceite neutro apto para todo tipo de pieles y edades, utilizándose para toda la familia desde las edades más tempranas. Es ideal como base para formularlo con otros aceites, aceites esenciales y lociones. ", "../images/11.jpg"), new product(12, "Aceite corporal de almendras dulces con dosificador 1L", "1000ml", 14.99, null, "El Aceite de Almendras dulces es básico para una hidratación y nutrición de la piel. Puedes utilizarlo en todas las partes de tu cuerpo preferiblemente después de la ducha con la piel húmeda, para ayudar a su absorción llegando a las capas profundas de la piel. Un aceite neutro apto para todo tipo de pieles y edades, utilizándose para toda la familia desde las edades más tempranas. Es ideal como base para formularlo con otros aceites, aceites esenciales y lociones.", "../images/12.jpg")];
data_principal = data_principal.concat([new product(13, "Aceite corporal de almendras dulces con dosificador 500ml", "500ML", 11.55, null, "El Aceite de Almendras dulces es básico para una hidratación y nutrición de la piel. Puedes utilizarlo en todas las partes de tu cuerpo preferiblemente después de la ducha con la piel húmeda, para ayudar a su absorción llegando a las capas profundas de la piel. Un aceite neutro apto para todo tipo de pieles y edades, utilizándose para toda la familia desde las edades más tempranas. Es ideal como base para formularlo con otros aceites, aceites esenciales y lociones.", "../images/13.jpg"), new product(14, "Aceite Corporal de Granada", "100ML", 22.90, null, "El aceite corporal de granada es de acción antioxidante intensiva que sirve para la regeneración celula, reafirmando y mejorando la elasticidad. Está indicado para pieles secas, maduras y estresadas, pues ayuda a prevenir el envejecimiento prematuro de la piel. Con ingredientes 100% naturales y ecológicos, que otorgan un aroma sensual y dulce. Testado dermatológicamente, no testado en animales. Apto para veganos.", "../images/14.jpg"), new product(15, "Aceite Corporal de Rosa Mosqueta", "100ML", 22.90, null, "La principal acción de la Rosa Mosqueta es la regeneración de la piel y elasticidad, aportando tonicidad a la piel. Combate los primeros signos de envejecimiento de la piel. Este producto combina la acción alisante de la rosa mosqueta con las propiedades hidratantes del aceite de jojoba. Da como resultado un aceite muy nutritivo, de una textura ligera y muy absorvente. Testado dermatológicamente en todo tipo de pieles, pero no en animales. Apto para veganos. De uso diario.", "../images/15.jpg"), new product(16, "Aceite corporal Embellecedor del Busto", "", 81.70, [70, 2], "Aceite corporal empleado para moldear y realzar el busto dándole una apariencia de mayor volumen. Hidrata y nutre ayudando a prevenir las estrías de esta zona tan sensible. Utilízalo directamente con ligeros masajes circulares hasta su total absorción. Puedes utilizarlo de forma diaria, para mejores resultados te aconsejamos de dos a tres aplicaciones al día.", "../images/16.jpg"), new product(17, "Aceite corporal Reafirmante de Tejidos", "", 60, null, "Aceite corporal indispensable para prevenir la pérdida de firmeza de los tejidos y reafirmar las zonas que presentan flacidez. Puedes hidratar tu cuerpo de forma diaria con este aceite y beneficiarte de sus propiedades reafirmantes. Con ingredientes totalmente naturales consigue una hidratación en las capas profundas de la piel.", "../images/17.jpg"), new product(18, "Aceite corporal Reafirmante del Busto", "", 81.70, null, "Aceite corporal específico de tratamiento que reafirma eficazmente el seno caído a la vez que hidrata y suaviza la piel devolviéndole su belleza. El tratamiento natural con este aceite realza el busto para que se muestre más bello. Este aceite está libre de hormonas y otros componentes químicos, se basa en ingredientes naturales con propiedades hidratantes y estimuladoras.", "../images/18.jpg"), new product(19, "Aceite corporal Reina de Egipto", "", 57.30, null, "Aceite corporal de exótica fragancia que nutre en profundidad, combate el envejecimiento cutáneo, regenera y alisa, a la vez que aporta autoestima y confianza. Este aceite es muy usado y recomendado entre nuestros clientes gracias a su versatilidad y eficacia.", "../images/19.jpg"), new product(20, "Aceite daúrico corporal de Natura Siberica", "", 18.95, null, "Relaja tu cuerpo con este fantástico producto con el que podrás disfrutar de momentos únicos. Aceite daúrico corporal es perfecto para pieles secas. Una explosión de sensaciones gracias a su composición que revitalizará tu piel.", "../images/20.jpg"), new product(21, "Aceite de Aguacate corporal", "125ml", 15, null, "El aceite de aguacate actúa un bálsamo perfecto para la piel. Destaca por su efecto nutritivo, protector y regenerante. Indicado para pieles secas, agrietadas y envejecidas. Tiene una excelente penetración y además ayuda a filtrar de forma natural la radiación solar.", "../images/21.jpg"), new product(22, "Aceite de almendras corporal Bio", "125ml", 14.95, null, "Hidrata y nutre tu piel con este aceite de almendras ecológico de primera prensada en frío. Te recomendamos su uso después de la ducha con la piel húmeda, mejora su absorción. Puedes utilizarlo de base para formularlo con otro aceites, aceites esenciales y lociones.", "../images/22.jpg"), new product(23, "Aceite de Argán Bio", "30ml", 12.99, null, "Este aceite vegetal rico en vitaminas y antioxidantes te hará lucir una piel radiante. El aceite de argán te aportará la luminosidad y elasticidad que necesitas para presumir de belleza natural. Ideal para todo tipo de pieles y capaz de nutrir las capas profundas de la piel.", "../images/23.jpg"), new product(24, "Aceite de Argán Bio", "100ml", 25.95, null, "Este aceite vegetal rico en vitaminas y antioxidantes te hará lucir una piel radiante. El aceite de argán te aportará la luminosidad y elasticidad que necesitas para presumir de belleza natural. Ideal para todo tipo de pieles y capaz de nutrir las capas profundas de la piel.", "../images/24.jpg"), new product(25, "Aceite de CBD 5%", "15ml", 20.95, [80, 2], "Aceite de semillas de cáñamo con CBD al 5%. Adecuado para el uso diario en personas con dolor crónico o de intensidad alta. El aceite de cáñamo con CBD de Terra Verda es orgánico, vegano y libre de crueldad animal. Su exclusivo método de extracción permite mantener todas las propiedades de la semilla de cáñamo sin trazos de tóxicos ni alcoholes. Puedes usarlo diariamente para aliviar las dolencias articulares o musculares por el dolor crónico, días estresantes o la actividad deportiva.", "../images/25.jpg")]);


// FUNCIONES PIE DE PAGINA 

function lengs() {
    var index = Math.ceil((data_principal.length) / 12)
    return index
}

function index_s() {
    var index = lengs()
    var contendor = document.getElementById("contenedor_pagina")
    for (var p = 1; p < index + 1; p++) {
        var plantilla_index = `<li class="page-item paginado"><a class="page-link texto_paginado" href="#">${p}</a></li>`
        contendor.innerHTML += plantilla_index
    }
}

//FUNCIONES PRINCIPALES

function main() {
    var contenedor = document.getElementById("contenedor")
    if (data_principal.length <= 12) {
        for (var i = 0; i < data_principal.length; i++) {
            var plantilla = `<div class="card carta">
            <svg class="corazon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
            <img class="card-img-top imagen" src="${data_principal[i].imagen}" alt="Card image cap">
            <h5 class="texto_titulo">${data_principal[i].nombre}</h5>
            <div class="card-body">
                <p class="complemento">${data_principal[i].detalle}</p>
                <p class="complemento_money">$${data_principal[i].precio}</p>
            </div>
            <button  onclick="xds(${data_principal[i].id})" class="boton" ><svg style=" margin-bottom: 2.5%; margin-right: 5%;"
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-basket3-fill" viewBox="0 0 16 16">
                        <path
                            d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z" />
                    </svg>Añadir a la cesta</button>
            </div>`
            contenedor.innerHTML += plantilla;

        }
    } else {
        for (var i = 0; i < 12; i++) {
            var plantilla = `<div class="card carta">
            <svg class="corazon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
            <img class="card-img-top imagen" src="${data_principal[i].imagen}" alt="Card image cap">
            <h5 class="texto_titulo">${data_principal[i].nombre}</h5>
            <div class="card-body">
                <p class="complemento">${data_principal[i].detalle}</p>
                <p class="complemento_money">$${data_principal[i].precio}</p>
            </div>
            <button class="boton" onclick="xds(${data_principal[i].id})" ><svg style=" margin-bottom: 2.5%; margin-right: 5%;"
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-basket3-fill" viewBox="0 0 16 16">
                        <path
                            d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z" />
                    </svg>Añadir a la cesta</button>
            </div>`
            contenedor.innerHTML += plantilla;

        }
    }

    var contendor = document.getElementById("contenedor_pagina")
    contendor.innerHTML = ""
    index_s()
}

//NAVEGACIÓN 

document.getElementById("xd").addEventListener("click", (e) => {
    var index = e.target.innerHTML
    var contenedor = document.getElementById("contenedor")
    contenedor.innerHTML = ""
    if (index == 1) {
        main()
    } else if (index > 1) {
        var regla = 12
        var final = (index * regla) - regla
        for (var i = final + 1; i < (data_principal.length); i++) {
            var plantilla = `<div class="card carta">
                <svg class="corazon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path
                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                <img class="card-img-top imagen" src="${data_principal[i].imagen}" alt="Card image cap">
                <h5 class="texto_titulo">${data_principal[i].nombre}</h5>
                <div class="card-body">
                    <p class="complemento">${data_principal[i].detalle}</p>
                    <p class="complemento_money">$${data_principal[i].precio}</p>
                </div>
                <button  onclick="xds(${data_principal[i].id})" class="boton" ><svg style=" margin-bottom: 2.5%; margin-right: 5%;"
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-basket3-fill" viewBox="0 0 16 16">
                            <path
                                d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z" />
                        </svg>Añadir a la cesta</button>
                </div>`
            contenedor.innerHTML += plantilla;
        }
    }
    var contendor = document.getElementById("contenedor_pagina")
    contendor.innerHTML = ""
    index_s()
})

//BUSQUEDA
document.getElementById("filtro_string").addEventListener("click", (e) => {
    var contenedor = document.getElementById("contenedor")
    var palabra_str = document.getElementById("busqueda_str").value.toLowerCase()
    if (palabra_str != "") {
        contenedor.innerHTML = ""
        for (var i = 0; i < data_principal.length; i++) {
            if (data_principal[i].nombre.toLowerCase().includes(palabra_str)) {
                var plantilla = `<div class="card carta">
            <svg class="corazon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
            <img class="card-img-top imagen" src="${data_principal[i].imagen}" alt="Card image cap">
            <h5 class="texto_titulo">${data_principal[i].nombre}</h5>
            <div class="card-body">
                <p class="complemento">${data_principal[i].detalle}</p>
                <p class="complemento_money">$${data_principal[i].precio}</p>
            </div>
            <button  onclick="xds(${data_principal[i].id})" class="boton" ><svg style=" margin-bottom: 2.5%; margin-right: 5%;"
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-basket3-fill" viewBox="0 0 16 16">
                        <path
                            d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z" />
                    </svg>Añadir a la cesta</button>
            </div>`
                contenedor.innerHTML += plantilla
            }
        }
        document.getElementById("busqueda_str").value = ""
    } else {
        alert("Digite algo")
    }
})

//Filtrar_precio
document.getElementById("filtrar_precio_bus").addEventListener("click", (e) => {
    var min = document.getElementById("precio_min").value
    var max = document.getElementById("precio_maximo").value
    if (min != "" && max != "") {
        if (max > min) {
            var contador = false
            min = parseFloat(min)
            max = parseFloat(max)
            var contenedor = document.getElementById("contenedor")
            var back = contenedor.innerHTML
            contenedor.innerHTML = ""
            for (var i = 0; i < data_principal.length; i++) {
                if ((data_principal[i].precio >= min) && (data_principal[i].precio <= max)) {
                    contador = true
                    var plantilla = `<div class="card carta">
                <svg class="corazon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path
                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                <img class="card-img-top imagen" src="${data_principal[i].imagen}" alt="Card image cap">
                <h5 class="texto_titulo">${data_principal[i].nombre}</h5>
                <div class="card-body">
                    <p class="complemento">${data_principal[i].detalle}</p>
                    <p class="complemento_money">$${data_principal[i].precio}</p>
                </div>
                <button  onclick="xds(${data_principal[i].id})" class="boton" ><svg style=" margin-bottom: 2.5%; margin-right: 5%;"
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-basket3-fill" viewBox="0 0 16 16">
                            <path
                                d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z" />
                        </svg>Añadir a la cesta</button>
                </div>`
                    contenedor.innerHTML += plantilla
                }
            }
            if (contador == false) {
                contenedor.innerHTML = back
                alert("No se encontro ningun precio")
            }
        } else {
            alert("El minimo es mayor al máximo")
        }
    } else {
        alert("Debe agregar un minimo y un máximo")
    }
})

//EJECUCIÓN
main()

//MODALES
//MODAL_PRODUCTO
//DISPLAY FLEX
function cerrar_modal_xs() {
    document.getElementById("p_negra").style.display = "none";
    document.getElementById("modal_producto").style.display = "none";
}

function xds(x) {
    var contendor = document.getElementById("modal_producto")
    for (var i = 0; i < data_principal.length; i++) {
        if (data_principal[i].id == x) {
            var plantilla = `<div class="container">
            <div class="row">
                <div class="col">
                    <img class="img_modal" src="${data_principal[i].imagen}" alt="">
                </div>
                <div class="col-8">
                    <div class="titulo_nav_modal">
                        <p class="titulo_texto_modal">${data_principal[i].nombre}</p>
                        <button id="cerrar_modal" onclick="cerrar_modal_xs()" class="cerrar_modal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                          </svg></button>
                        <svg class="corazon_modal" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path
                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                    </div>

                    <div class="detalles_modal">
                        <p class="detalle_modal_und">${data_principal[i].detalle}</p>
                        <p class="precio_modal_und">$${data_principal[i].precio}</p>
                        <p class="oferta">${data_principal[i].precio_oferta}</p>
                    </div>

                    <div class="texto_modal_contenido">
                    ${data_principal[i].descripcion}
                    </div>
                    
                    <input style="width:15% ; height: 4.5vh; text-align: center;" type="number" placeholder="1"><button onclick="añadir(${data_principal[i].id})" class="boton_modal"><svg style=" margin-bottom: 2.5%; margin-right: 5%;"
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-basket3-fill" viewBox="0 0 16 16">
                        <path
                            d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z" />
                    </svg>Añadir a la cesta  </button>

                </div>
            </div>
        </div>`
            contendor.innerHTML = plantilla
        }
    }
    document.getElementById("p_negra").style.display = "flex";
    document.getElementById("modal_producto").style.display = "flex";
}

//Modal_Cuenta
document.getElementById("btn_abrir_cta").addEventListener("click", (e) => {
    if (document.getElementById("cuenta_modal_acc").style.display == "flex") {
        document.getElementById("cuenta_modal_acc").style.display = "none"
    } else {
        document.getElementById("cuenta_modal_acc").style.display = "flex"
    }
})

//Modal_Carrito
document.getElementById("cerrar_modal_carrito").addEventListener("click", (e) => {
    document.getElementById("carrito_compras").style.display = "none"
    document.getElementById("p_negra").style.display = "none"
})

document.getElementById("abrir_carrito").addEventListener("click", (e) => {
    document.getElementById("carrito_compras").style.display = "flex"
    document.getElementById("p_negra").style.display = "flex"
})

function añadir(id) {
    for (var i = 0; i < data_principal.length; i++) {
        if (data_principal[i].id == id) {
            data_carrito.push(data_principal[i])
            var contenedor = document.getElementById("carrito_compras_cuerpo")
            var plantilla = `<div class="row">
            <div class="col-4">
                <img src="${data_principal[i].imagen}" alt="" style="width: 100%;">
            </div>
            <div class="col-8">
                <div class="row">
                    <div class="col-7">
                        <h4 class="titulo_texto_modal" id="${data_principal[i].nombre}" style="width: 100%; font-size: 100%;">${data_principal[i].nombre}</h4>
                    </div>
                    <div class="col-4">
                        <button class="boton_bq">
                            <svg style="float: right;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                              </svg>
                        </button>
                    </div>
                </div>
                <p class="detalle_modal_und">${data_principal[i].detalle}</p>
                <div class="row">
                    <div class="col-3" style="font-family: 'Work Sans';
                    color: rgb(131, 131, 131);">Cantidad:</div>
                    <div class="col-4"><input type="number" min="1" class="carrito_detalle"></div>
                    <div class="col-4 ">$${data_principal[i].precio}</div>
                </div>
            </div>
        </div>
        <hr>`
            contenedor.innerHTML += plantilla
            var dinero = 0
            for (var p = 0; p < data_carrito.length; p++) {
                dinero += parseFloat(data_carrito[p].precio)
            }
            document.getElementById("precio_innet_sub").innerHTML = dinero + "$"
            document.getElementById("precio_innet_total").innerHTML = dinero + (dinero * 0.19) + "$"
            alert("Se ha agregado el elemento " + data_principal[i].nombre + " al carrito!")
            break
        }
    }
}

//Modal_Carrito_FullScreen
document.getElementById("ir_carrito_fs").addEventListener("click", (e) => {
    var contenedor = document.getElementById("compras_fs_id")
    var dinero = 0
    for (var p = 0; p < data_carrito.length; p++) {
        var plantilla = `<div style="width:100% ;">
        <div class="row">
            <div class="col-3">
                <img src="${data_carrito[p].imagen}" alt="" style="width: 100%;">
            </div>
            <div class="col-5">
                <p style="font-weight: bold; font-family:sans-serif; word-wrap: break-word;">${data_carrito[p].nombre}</p>
                <p style="margin-top: -5%; font-family:sans-serif; font-size: 80%; color: rgb(175, 175, 175);">${data_carrito[p].detalle}</p>
            </div>
            <div class="col-2">
                <input min="1" placeholder="Cantidad" type="text" style="width: 100%; text-align: center;">
            </div>
            <div class="col-1">
                $4
            </div>
            <div class="col-1">
                <svg id="boton_borrar_fullscren_carrito" style="width: 100%; align-items: center;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash2" viewBox="0 0 16 16">
                    <path d="M14 3a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2zM3.215 4.207l1.493 8.957a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836l1.493-8.957C11.69 4.689 9.954 5 8 5c-1.954 0-3.69-.311-4.785-.793z"/>
                  </svg>
            </div>
        </div>
    </div>`
        dinero += parseFloat(data_carrito[p].precio)
        contenedor.innerHTML += plantilla
    }
    document.getElementById("compras_fs_subtotal").innerHTML = dinero + "$"
    document.getElementById("compras_fs_total_s").innerHTML = dinero + (dinero * 0.19) + "$"
    document.getElementById("modal_fs_c").style.display = "flex"
    document.getElementById("carrito_compras").style.display = "none"
})

function reverse() {
    document.getElementById("modal_fs_c").style.display = "none"
    document.getElementById("carrito_compras").style.display = "flex"
}

document.getElementById("cta_carrito").addEventListener("click", (e) => {
    document.getElementById("cuenta_modal_acc").style.display = "none"
    document.getElementById("carrito_compras").style.display = "flex"
})