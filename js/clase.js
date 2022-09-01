export class producto {
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