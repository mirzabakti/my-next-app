"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "@/store/productSlice";

export default function ProductInput() {
  const [form, setForm] = useState({ name: "", price: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price) return;
    dispatch(addProduct({ name: form.name, price: Number(form.price) }));
    setForm({ name: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
      <input type="text" placeholder="Nama produk (Redux)" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} required style={{ marginRight: 8 }} />
      <input type="number" placeholder="Harga (Redux)" value={form.price} onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))} required style={{ marginRight: 8 }} />
      <button type="submit">Tambah ke Redux</button>
    </form>
  );
}
