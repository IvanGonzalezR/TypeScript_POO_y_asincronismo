import { ProductHttpService } from "./services/product-http-service";

const productService = new ProductHttpService();


async function getProducts() {
  console.log('---'.repeat(10));
  const products = await productService.getAll();
  console.log(products.length);
  // console.log(products.map(item => item.title));

  console.log('---Update'.repeat(10));
  const productId = products[ 0 ].id;
  productService.update(productId, {
    price: 10000,
    title: 'nuevo Title',
    description: 'new description'
  });
  console.log('---Find'.repeat(10));
  const product = await productService.findOne(productId);
  console.log(product);

}
getProducts();








