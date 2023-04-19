import axios from "axios";
import { Product } from './models/product.model'

(() => {

  async function getProducts() {
    // tipar el get de Axios
    const { data } = await axios.get<Product[]>(
      'https://api.escuelajs.co/api/v1/products'
    );

    return data;
  }

  async function logProducts() {
    const products = await getProducts();
    console.log(products.map(item => `${item.id} - ${item.title}`));
  }

  logProducts();
})()