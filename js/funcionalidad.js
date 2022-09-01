import { producto } from "./clase.js";
var data_principal = []
var data_favorito = []
var p1 = new producto(1, "Aceite esencial de Clavo", "12ML", 8, 665, "El aceite esencial de clavo es conocido por sus increíbles propiedades antimicrobianas, antimicóticas, antisépticas, antivirales, afrodisíacas y estimulantes. Perfecto para utilizar en tus mezclas de Cosmética Natural, añadiendo unas cuantas gotas en tu crema corporal o aceite vegetal, conseguirás nutrir y lucir una piel radiante y 100% cuidado.", "../img/1.jpg")
var p2 = new producto(2, "Parches de Oro de 24 kt Rejuvenecedores para Contorno de Ojos", "60UDS.", 15.50, 0.26, "Parches de oro de 24 kt rejuvenecedores para contorno de ojos de Natura Siberica. Parches para ojos con efecto rejuvenecedor enriquecidos con oro de 24kt. Su acción descongestiona la piel, la suaviza y mejora su luminosidad.", "../img/2.jpg")
var p3 = new producto(3, "Parches Iluminadores para el Contorno de Ojos", "60UDS", 15.50, 0.26, "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven \n Estos parches iluminadores son una solución rápida y cómoda para darle a tus ojos ese toque de luz y vitalidad que el estrés y la vida urbana les van quitando. Con su base de biome con activo postbiótico único y extractos fermentados de mora de los pantanos norteña y frambuesa silvestre ayudan al microbioma de la piel a aumentar su resistencia y mejorar su luminosidad. La vitamina C presente en su fórmula mejora el tono y la textura del contorno para ayudar a recuperar su brillo natural, y la niacinamida contribuye a fortalecer la barrera de hidratación de la epidermis, dando lugar a un resultado suave, esplendoroso y rejuvenecido.", "../img/3.jpg")
var p4 = new producto(4, "Parches Supertonificantes para Contorno de Ojos", "60UDS", 15.50, 0, "Parches supertonificantes para contorno de ojos de Natura siberica. Parches para ojos con efecto tonificante que reducen visiblemente los signos de fatiga en la mirada y le aportan luz y vitalidad al instante. \n Estos parches supertonificantes son la solución definitiva para decir adiós a los signos de fatiga y la hinchazón en el contorno de los ojos. Basados en activo postbiótico único y extractos fermentados de mora de los pantanos norteña y frambuesa silvestre, crean sobre la mirada un efecto iluminador y energizante al instante. La cafeína presente en su fórmula ayuda a tensar las líneas finas y reducir la piel hinchada, mientras que la vitamina E genera un efecto regenerador que deja un aspecto descansado y revitalizado.", "../img/4.jpg")
var p5 = new producto(5, "6 Discos Desmaquillantes de Fibra Natural", "6UDS", 10.50, 1.75, "Eliminan el maquillaje y limpian el rostro con suavidad. Elaborados en algodón y carbón de bambú. De doble cara y función: \n Limpieza diaria: elaborada en algodón ultrasuave es adecuada para productos líquidos. \n Exfoliante: combinación de algodón y carbón de bambú, de propiedades purificantes y desintoxicantes. Indicada para texturas cremosas y densas. \n Incluye 6 discos y una práctica bolsita de algodón para lavarlos ( máx. 30 grados) y guardarlos. No secar en secadora. \n Reúnen ahorro en otros productos de un solo uso (toallitas, discos de algodón) y máximo respeto por el medio ambiente. ", "../img/5.jpg")
var p6 = new producto(6, "Aceite anticelulítico de abedul", "100ML", 22.90, 229, "El extracto de hojas de abedul contiene flavonoides y tanines, los cuales sirven para mantener y conservar el metabolismo y circulación de los líquidos en el cuerpo. Su función es dar firmeza, elasticidad y suavidad a la piel, previniendo y mejorando el estado de la misma. Por esta razón, previene y mejora la celulitis. No contiene ni sustancias químicas, ni colorantes, ni conservantes. Es apto para veganos y no está testado en animales.", "../img/6.jpg")
var p7 = new producto(7, "Aceite antiinflamatorio S.O.S Rescate", "30ML", 12.45, 415, "Pequeñas heridas, quemaduras, golpes, cicatrices… ¿Cuántos productos diferentes estás usando para paliar estos accidentes? Pues a partir de ahora con uno sólo podrás calmar y regenerar tu piel y la de toda tu familia con S. O. S. Rescate, una extraordinaria mezcla de aceites vegetales y esenciales procedentes de agricultura ecológica.", "../img/7.jpg")
var p8 = new producto(8, "Aceite Bucal de Coco Orgánico Premium", "180ML", 9.60, 53.33, "Oil Pulling de Dr. Goerg. El aceite bucal de coco orgánico premium de Dr. Goerg es fácil de usar y, gracias a sus ingredientes 100 % naturales enriquecidos con aceites esenciales de menta y eucalipto, garantiza una sensación en la boca limpia, agradable y fresca. Nuestro aceite bucal orgánico premium también es 100% vegano y está certificado como cosmético orgánico por Cosmos Organic . Si se usa regularmente antes de cepillarse los dientes, la extracción de aceite puede garantizar un aliento fresco y encías bien cuidadas a largo plazo. Al igual que con todos nuestros productos orgánicos premium, solo utilizamos las mejores materias primas de cultivos exclusivamente sostenibles para nuestro aceite de boca de coco orgánico premium.", "../img/8.jpg")
var p9 = new producto(9, "Aceite corporal blanco siberiano anticelulítico de Natura Siberica", "200ML", 6.95, 34.75, "Este producto te trae lo mejor para el cuidado de tu cuerpo gracias a las propiedades de la cera blanca de abeja, los aceites naturales y la schizandra. Regálate lo mejor para tu piel y disfruta de esta combinación que hidratará de forma eficaz las zonas de tu cuerpo que más lo necesite.", "../img/9.jpg")
var p10 = new producto(10, "Aceite corporal Body Sculptor", "", 73.70, 491, "Aceite corporal que moldea el cuerpo y esculpe la silueta de forma natural y eficaz. Previene el exceso de peso y la retención de líquidos gracias a su acción drenante, activa la microcirculación a la vez que tonifica la piel. Esculpe tu cuerpo realizando tratamientos de forma diaria. Está formulado con aceites vegetales naturales adecuado para pieles sensibles.", "../img/10.jpg")
var p11 = new producto(11, "Aceite corporal de almendras dulces", "500ML", 10.45, 20.90, "El Aceite de Almendras dulces es básico para una hidratación y nutrición de la piel. Puedes utilizarlo en todas las partes de tu cuerpo preferiblemente después de la ducha con la piel húmeda, para ayudar a su absorción llegando a las capas profundas de la piel. Un aceite neutro apto para todo tipo de pieles y edades, utilizándose para toda la familia desde las edades más tempranas. Es ideal como base para formularlo con otros aceites, aceites esenciales y lociones. ", "../img/11.jpg")
var p12 = new producto(12, "Aceite corporal de almendras dulces con dosificador 1L", "1000ML", 14.99, 0, "El Aceite de Almendras dulces es básico para una hidratación y nutrición de la piel. Puedes utilizarlo en todas las partes de tu cuerpo preferiblemente después de la ducha con la piel húmeda, para ayudar a su absorción llegando a las capas profundas de la piel. Un aceite neutro apto para todo tipo de pieles y edades, utilizándose para toda la familia desde las edades más tempranas. Es ideal como base para formularlo con otros aceites, aceites esenciales y lociones.", "../img/12.jpg")
data_principal.push(p1)
data_principal.push(p2)
data_principal.push(p3)
data_principal.push(p4)
data_principal.push(p5)
data_principal.push(p6)
data_principal.push(p7)
data_principal.push(p8)
data_principal.push(p9)
data_principal.push(p10)
data_principal.push(p11)
data_principal.push(p12)


function main() {
    for (var i = 0; i < data_principal.length; i++) {
        var contenedor = document.getElementById("contenedor")
        var plantilla = `<div class="card carta">
            <svg class="corazon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
            <img class="card-img-top imagen" src="${data_principal[i].imagen}" alt="Card image cap">
            <h5 class="texto_titulo">${data_principal[i].nombre }</h5>
            <div class="card-body">
                <p class="complemento">${data_principal[i].detalle}</p>
                <p class="complemento_money">$${data_principal[i].precio}</p>
            </div>
            <button class="boton"><svg style=" margin-bottom: 2.5%; margin-right: 5%;"
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-basket3-fill" viewBox="0 0 16 16">
                        <path
                            d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z" />
                    </svg>Añadir a la cesta</button>
            </div>`

        contenedor.innerHTML += plantilla;
    }

}

function busqueda(palabra) {
    var contenedor = document.getElementById("contenedor")
    contenedor.innerHTML = ""
    for (var i = 0; i < data_principal.length; i++) {
        if (data_principal[i].nombre.toLowerCase().includes(palabra.toLowerCase())) {
            var plantilla = `<div class="card carta">
            <svg class="corazon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
            <img class="card-img-top imagen" src="${data_principal[i].imagen}" alt="Card image cap">
            <h5 class="texto_titulo">${data_principal[i].nombre }</h5>
            <div class="card-body">
                <p class="complemento">${data_principal[i].detalle}</p>
                <p class="complemento_money">$${data_principal[i].precio}</p>
            </div>
            <button class="boton"><svg style=" margin-bottom: 2.5%; margin-right: 5%;"
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-basket3-fill" viewBox="0 0 16 16">
                        <path
                            d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z" />
                    </svg>Añadir a la cesta</button>
            </div>`
            contenedor.innerHTML += plantilla
        }
    }

}
main()
busqueda("parches")