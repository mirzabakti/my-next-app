export default function NotFound() {
  return (
    <main style={{ textAlign: "center", padding: 64 }}>
      <h1 style={{ fontSize: 72, marginBottom: 0 }}>404</h1>
      <p style={{ fontSize: 24, marginTop: 0 }}>Oops! Halaman tidak ditemukan.</p>
      <p>Kamu nyasar ke rute yang tidak ada 😅</p>
      <a href="/" style={{ color: "#0070f3", textDecoration: "underline" }}>
        Kembali ke Beranda
      </a>
    </main>
  );
}
