type Order = { price: number; qty: number };

export function summary(orders: Order[]): number {
    if (!Array.isArray(orders)) throw new Error("orders harus array");
    return orders.reduce((total, order) => total + order.price * order.qty, 0);
}
export function formatRupiah(n: number): string{
    if (typeof n!== "number") throw new Error("input harus number");
    return "Rp" + n.toLocaleString("id-ID");
}
