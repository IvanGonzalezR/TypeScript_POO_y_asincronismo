import { UpdateProductDto } from "../dtos/product.dto";
import { Category } from "../models/category.model";
import { Product } from "../models/product.model";
import axios from 'axios'

class BaseHttpService<T> {
  // data: T[] = [];
  constructor(
    protected url: string
  ) { }

  async getAll(): Promise<T[]> {
    const { data } = await axios.get<T[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

// const service = new BaseHttpService<string>();
// service.getAll()

// const service1 = new BaseHttpService<Category>();
// service1.getAll()
const url1 = 'https://api.escuelajs.co/api/v1/products';
const url2 = 'https://api.escuelajs.co/api/v1/categories';

async function example1() {
  const productService = new BaseHttpService<Product>(url1);
  const rta = await productService.getAll();
  console.log(rta.length);
  productService.update<Product[ 'id' ], UpdateProductDto>(1, {
    title: 'asa',
  })

  const categoryService = new BaseHttpService<Category>(url2);
  const rta2 = await categoryService.getAll();
  console.log(rta2.length);
}
example1();

export { BaseHttpService }