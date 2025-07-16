"use client";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "" });
  const [editId, setEditId] = useState(null);

  // Fetch products
  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle form submit (add or edit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await fetch("/api/products", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editId, ...form, price: Number(form.price) }),
      });
      setEditId(null);
    } else {
      await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, price: Number(form.price) }),
      });
    }
    setForm({ name: "", price: "" });
    fetchProducts();
  };

  // Handle delete
  const handleDelete = async (id) => {
    await fetch("/api/products", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchProducts();
  };

  // Handle edit
  const handleEdit = (product) => {
    setEditId(product.id);
    setForm({ name: product.name, price: product.price });
  };

  return (
    <main style={{ padding: 32 }}>
      <h1>Daftar Produk</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <input type="text" placeholder="Nama produk" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} required style={{ marginRight: 8 }} />
        <input type="number" placeholder="Harga" value={form.price} onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))} required style={{ marginRight: 8 }} />
        <button type="submit">{editId ? "Update" : "Tambah"}</button>
        {editId && (
          <button
            type="button"
            onClick={() => {
              setEditId(null);
              setForm({ name: "", price: "" });
            }}
          >
            Batal
          </button>
        )}
      </form>
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => handleEdit(product)}>Edit</button>
                <button onClick={() => handleDelete(product.id)} style={{ marginLeft: 8 }}>
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
