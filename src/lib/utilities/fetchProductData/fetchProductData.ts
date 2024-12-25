export async function getProductData() {
  // const URL = `https://amate.onrender.com/product`;
  const URL = `http://[2a05:d014:162b:9400:bb76:994f:a4a7:a556]:8000/product`;
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status}`);
  }

  const products = await res.json();
  return products;
}
