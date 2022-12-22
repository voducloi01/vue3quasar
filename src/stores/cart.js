import { defineStore } from 'pinia';
import axios from 'axios';
import { ref, onMounted } from 'vue';

export const useCart = defineStore('useCart', () => {
  const dataCart = ref([]);

  const loadData = async () => {
    await axios
      .get('https://636caa44ab4814f2b26a713e.mockapi.io/cart')
      .then((response) => {
        dataCart.value = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  loadData();
  // onMounted(() => console.log(dataCart.value));
  // const buyProduct = (product) => {
  //   axios
  //     .post('https://636caa44ab4814f2b26a713e.mockapi.io/cart', {
  //       ...product,
  //       soluong: 1,
  //     })
  //     .then((response) => {
  //       dataCart.value = response.data;
  //       loadData();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return { dataCart, loadData };
});
