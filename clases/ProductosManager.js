import { promises as fs} from 'fs'

const path = './productos.json'

export default class ProductosManager {
    constructor() {
        this.productos = [];
        this.path = './productos.json';
    }

    async agregarProducto(producto) {
        const data = JSON.parse(await fs.readFile(path, "utf-8"));
        const product = data.find(prod => prod.id === producto.id);

        if(product) {
            console.log("Producto existente");
        }else{
            data.push(producto);
            await fs.writeFile(path, JSON.stringify(data));
        }
    }

    async getProductos() {
        const data = JSON.parse(await fs.readFile(path, "utf-8"));
        console.log(data);
        return(data);
    }

    async getProductById(productoId) {
        const data = JSON.parse(await fs.readFile(path, "utf-8"));
        const product = data.find(producto => producto.id === productoId);
        
        if(!product) {
            console.log("Error: no se encontro el producto");
            return null;
        }else{
            console.log(product);
            return product;
        }
    }

    async updateProduct(productoId, updateFields) {
        const prods = JSON.parse(await fs.readFile(path,"utf-8"));
        const indice = prods.findIndex(prod => prod.id === productoId);

        if(indice !== -1) {
            const updatedProduct = {...prods[indice], ...updateFields};
            prods[indice] = updatedProduct;
            await fs.writeFile(path, JSON.stringify(prods));
            return updatedProduct;
        }else{
            console.log("Producto no encontrado");
            return null;
        }
    }

    async deleteProduct(productoId) {
        const data = JSON.parse(await fs.readFile(path, "utf-8"));
        const filteredProducts = data.filter(productos => producto.id !== productId);
        if(data.length === filteredProducts.lenght) {
            console.log("Error, no se encontro el producto");
            return null;
        }else{
            await fs.writeFile(path, JSON.stringify(filteredProducts));
            return filteredProducts;
        }
    }


}