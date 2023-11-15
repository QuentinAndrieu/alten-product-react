import axios, { AxiosResponse } from 'axios';
import { Product } from '../models/Product';
import { HttpResponse } from '../models/HttpResponse';

const productsPath = '../../assets/products.json';

const productService = {
  getProducts: async (): Promise<Product[]> => {
    try {
      const response: AxiosResponse<HttpResponse<Product[]>> = await axios.get(
        productsPath,
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
};

export default productService;
