import { FaTruckMedical } from 'react-icons/fa6'
import { data } from 'autoprefixer'
import prisma from '@/app/lib/prisma'

export async function GET(request) {
  const { searchParams } = new URL(request.url)

  const productoParam = searchParams.get('id')
  const idProducto = productoParam ? parseInt(productoParam) : null

  const pedidoParam = searchParams.get('idPedido')
  const pedido = pedidoParam ? parseInt(pedidoParam) : null
  let productosPedido = []

  if (pedido !== null && !isNaN(pedido) && pedido > 0) {
    productosPedido = await prisma.pedido.findMany({
      where: {
        id: pedido,
      },
      select: {
        renglonPedido: {
          select: {
            mezcal: true,
            cantidad: true,
          },
        },
      },
    })

    return Response.json({ data: productosPedido })
  } else if (idProducto !== null && !isNaN(idProducto)) {
    const product = await prisma.mezcal.findUnique({
      where: {
        id: idProducto,
      },
    })

    return Response.json({ data: product })
  }

  return new Response(JSON.stringify({ error: 'Internal server error' }), {
    headers: { 'Content-Type': 'application/json' },
    status: 500,
  })
}

export async function DELETE(request, { params }) {
  try {
    const deleteMezcal = await prisma.Mezcal.delete({
      where: {
        id: Number(params.id),
      },
    })
    return NextResponse.json(deleteMezcal)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 })
    }
  }
}
