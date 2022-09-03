//MODALES
//MODAL_PRODUCTO
//DISPLAY FLEX
document.getElementById("cerrar_modal").addEventListener("click",(e)=>{
    document.getElementById("p_negra").style.display = "none";
    document.getElementById("modal_producto").style.display = "none";
})

function name_xd() {
    document.getElementById("p_negra").style.display = "flex";
    document.getElementById("modal_producto").style.display = "flex"; 
    return 0
}