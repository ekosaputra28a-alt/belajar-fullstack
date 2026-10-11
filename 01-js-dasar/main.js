// 1. Pakai .reduce()
function summary(orders) {
  if (!Array.isArray(orders)) throw new Error("orders harus array");
  return orders.reduce((total, order) => total + order.price * order.qty, 0);
}

// 2. pakai .toLocaleString('id-ID')
function formatRupiah(n) {
  if (typeof n !== "number") throw new Error("input harus number");
  return "Rp" + n.toLocaleString('id-ID');
}

// 3. pakai fetch + async/await
async function getUsername() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    return data.username;
  } catch (error) {
    return "fetch gagal: " + error.message;
  }
}

async function main() {
  console.log(
    summary([
      { price: 10000, qty: 2 },
      { price: 5000, qty: 1 },
    ]),
  ); // harus 25000
  console.log(formatRupiah(15000)); // harus Rp15.000
  console.log(await getUsername()); // harus Bret

  // tes validasi - tidak mematikan program
  try { console.log(summary([])); } catch (e) { console.error(e.message); } // harus 0
  try { console.log(formatRupiah("abc")); } catch (e) { console.error(e.message); } // harus "input harus number"
  try { console.log(summary("salah")); } catch (e) { console.error(e.message); } // harus "orders harus array"
}
main().catch(console.error);
