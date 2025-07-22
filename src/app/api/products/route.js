import prisma from "@/lib/prisma";

export async function GET() {
  const products = await prisma.product.findMany();
  return Response.json(products);
}

export async function POST(request) {
  const body = await request.json();
  const newProduct = await prisma.product.create({
    data: {
      name: body.name,
      price: Number(body.price),
    },
  });
  return Response.json(newProduct, { status: 201 });
}

export async function PUT(request) {
  const body = await request.json();
  const updated = await prisma.product.update({
    where: { id: Number(body.id) },
    data: {
      name: body.name,
      price: Number(body.price),
    },
  });
  return Response.json(updated);
}

export async function DELETE(request) {
  const { id } = await request.json();
  const deleted = await prisma.product.delete({
    where: { id: Number(id) },
  });
  return Response.json(deleted);
}
