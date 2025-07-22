"use client";
import { useSelector } from "react-redux";

export default function ProductList() {
  const products = useSelector((state) => state.product.items);
  return (
    <div style={{ marginBottom: 32 }}>
      <h3>Produk dari Redux State</h3>
      {products.length === 0 && (
        <p>
          <i>Belum ada produk di Redux.</i>
        </p>
      )}
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            {p.name} - Rp{p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
