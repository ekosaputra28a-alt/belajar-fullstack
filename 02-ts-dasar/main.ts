import { summary, formatRupiah } from "./order.js";

console.log(summary([{ price: 10000, qty: 2}, { price:5000, qty: 1 }]));
console.log(formatRupiah(15000));