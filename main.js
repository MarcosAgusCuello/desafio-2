import Producto from "./clases/productos.js";
import ProductosManager from "./clases/ProductosManager.js";

const manager = new ProductosManager();

const product1 = new Producto(
    "producto-1",
    "desc1",
    10,
    "/ejemplo-ruta-1.jpg",
    10
);

const product2 = new Producto(
    "producto-2",
    "desc2",
    20,
    "/ejemplo-ruta-2.jpg",
    30
);

manager.agregarProducto(product1);
manager.agregarProducto(product2);

console.log(manager.getProductos());
console.log(manager.getProductById(1));
console.log(manager.getProductById(2));
