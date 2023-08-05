export default class Producto {
    static #count = 1;


constructor(titulo, descripcion, precio, foto, codigo, stock) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.precio = precio;
    this.foto = foto;
    this.codigo = Producto.#count++;
    this.stock = stock;
    }
}