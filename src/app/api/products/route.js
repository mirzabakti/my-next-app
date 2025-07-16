let products = [
  { id: 1, name: "Produk Satu", price: 10000 },
  { id: 2, name: "Produk Dua", price: 20000 },
];

export async function GET() {
  return Response.json(products);
}

export async function POST(request) {
  const body = await request.json();
  const newId = products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1;
  const newProduct = { id: newId, ...body };
  products.push(newProduct);
  return Response.json(newProduct, { status: 201 });
}

export async function PUT(request) {
  const body = await request.json();
  const idx = products.findIndex((p) => p.id === body.id);
  if (idx === -1) return Response.json({ error: "Not found" }, { status: 404 });
  products[idx] = { ...products[idx], ...body };
  return Response.json(products[idx]);
}

export async function DELETE(request) {
  const { id } = await request.json();
  const idx = products.findIndex((p) => p.id === id);
  if (idx === -1) return Response.json({ error: "Not found" }, { status: 404 });
  const deleted = products.splice(idx, 1)[0];
  return Response.json(deleted);
}
