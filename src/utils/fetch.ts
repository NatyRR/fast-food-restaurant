export const baseUrl = 'http://localhost:3333';

export const endpoints = {
  signIn: '/api/auth/sign-in',
  signUp: '/api/auth/sign-up',
  deleteProduct: '/api/products', //? /{id}
  updateProduct: '/api/products', //? /{id}
  getAllproducts: '/api/products',
  getUserProfile: '/api/users/profile',
  createProduct: '/api/products/create',
  toggleProduct: '/api/products/toggle', //? /{id}
  getActiveProducts: '/api/products/active',
};
