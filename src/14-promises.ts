import axios from "axios";

(() => {

  function delay(time: number) {
    const promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('string');
      }, time)
    });
    return promise;
  }
  // Funcion asincrona ejecutora
  async function asyncFunction() {
    // console.time('delay');
    const rta = await delay(2000);
    console.log(rta);
    // console.timeEnd('delay');
  }

  async function getProducts() {
    const rta = await axios.get(
      'https://api.escuelajs.co/api/v1/products'
    );
    console.log(rta.data);
  }

  asyncFunction();
  console.log('---'.repeat(10));

  getProducts();

})()
