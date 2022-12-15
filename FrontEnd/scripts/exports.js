export const API_URL = "https://price-compare-gyn2.onrender.com";

/* Product Functions */

export function sessionSaveProducts(productsArr) {
  const products = getProducts();
  // only session save if it hasn't been saved before
  for (let product of productsArr) {
    const exists = products.find(saved => (
      saved.styleID === product.styleID
    ))
    if (exists) continue;
    products.push(product);
  }
  setProducts(products);
}

export function searchSavedProducts(styleId) {
  const products = getProducts();
  const product = products.find(product => product.styleID === styleId);
  return product ?? undefined;
}


function getProducts() {
  const products = JSON.parse(
    sessionStorage.getItem("products") ?? "[]"
  );
  return products;
}

function setProducts(products) {
  sessionStorage.setItem("products", JSON.stringify(products));
  return products;
}

/* User Functions  */
export function getCurrentUser() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user;
}

export function setCurrentUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}