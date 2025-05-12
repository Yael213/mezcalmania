import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const pedidos = await prisma.pedido.findMany()
    return NextResponse.json(pedidos)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 })
    }
  }
}

export async function POST(request) {
  try {
    const {
      fecha,
      total,
      tipoEnvio,
      nombre,
      nombreEmpresa,
      apellidoPaterno,
      apellidoMaterno,
      direccion,
      ciudad,
      estado,
      codigoPostal,
      telefono,
      correoElectronico,
      notas,
      renglonPedido,
    } = await request.json()

    const parsedRenglonPedido = Array.isArray(renglonPedido)
      ? renglonPedido
      : JSON.parse(renglonPedido)

    const newPedido = await prisma.pedido.create({
      data: {
        fecha,
        total,
        tipoEnvio,
        nombre,
        nombreEmpresa,
        apellidoPaterno,
        apellidoMaterno,
        direccion,
        ciudad,
        estado,
        codigoPostal,
        telefono,
        correoElectronico,
        notas,
        renglonPedido: {
          createMany: {
            data: parsedRenglonPedido,
          },
        },
      },
    })

    return NextResponse.json(newPedido)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 })
    }
  }
}
