import { summary, formatRupiah }  from "@/lib/orders";

const orders = [
  { price: 10000, qty: 2},
  { price: 5000, qty: 1},
];

export default function Home() {
  const total = summary(orders);
  return(
    <main style={{ padding: 32}}>
      <h1>Warung Eko</h1>
      <p>Total: {formatRupiah(total)}</p>
    </main>
  );
}