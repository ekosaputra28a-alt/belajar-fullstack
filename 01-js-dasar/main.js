// 1. Pakai .reduce()
function summary(orders) {
  return orders.reduce((total, order) => total + order.price * order.qty, 0);
}

// 2. pakai .toLocaleString('id-ID')
function formatRupiah(n) {
  return "Rp" + n.toLocaleString('id-ID');
}

// 3. pakai fetch + async/await
async function getUsername() {
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    return data.username;
   }
    catch (error) {
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
}
main().catch(console.error);
