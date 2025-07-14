export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  return (
    <main style={{ padding: 32 }}>
      <h1>Produk #{id}</h1>
      <p>
        Ini adalah halaman detail untuk produk dengan ID: <b>{id}</b>.
      </p>
      <p>Deskripsi produk bisa kamu kreasikan sendiri!</p>
    </main>
  );
}
