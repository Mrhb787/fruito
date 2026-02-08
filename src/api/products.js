// Mock API to simulate backend calls

import { categories, products } from '@/data/mockData';

export const fetchCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 500); // Simulate network latency
  });
};

export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 800); // Simulate network latency
  });
};
