import React from 'react'
import Image from 'next/image'

const Pedidos = () => {
  const pedidos = [
    {
      id: '#000144',
      contacto: 'antolino777@gmail.com',
      producto: 'Mezcal Armonía Espadín',
      monto: '$1,500.00',
      fechaHora: '18/03/2024 13:05:15',
      estado: 'En proceso',
    },
    {
      id: '#000143',
      contacto: '+52 445 467 7888',
      producto: 'Mezcal Armonía Espadín',
      monto: '$1,500.00',
      fechaHora: '15/03/2024 18:23:48',
      estado: 'Completado',
    },
    {
      id: '#000142',
      contacto: 'antolino777@gmail.com',
      producto: 'Queso Cotija',
      monto: '$120.00',
      fechaHora: '14/03/2024 03:51:02',
      estado: 'Cancelado',
    },
  ]

  return (
    <div className="font-roboto w-full h-full">
      <div className="bg-[#FBFBFB] rounded-3xl">
        <div className="p-2">
          <div className="flex mb-2 text-[#655F5F] text-sm font-semibold">
            <div className="w-1/6">ID del pedido</div>
            <div className="w-1/4">Contacto</div>
            <div className="w-1/4">Producto</div>
            <div className="w-1/6">Monto</div>
            <div className="w-1/4">Fecha y Hora</div>
            <div className="w-1/6">Estado</div>
          </div>
          <hr className="my-2 border-[#655F5F]" />
          {pedidos.map((pedido) => (
            <div
              key={pedido.id}
              className="bg-white shadow-md rounded-lg p-4 mb-4"
            >
              <div className="flex text-[#655F5F] text-sm ">
                <div className="w-1/6">{pedido.id}</div>
                <div className="w-1/4">{pedido.contacto}</div>
                <div className="w-1/4">{pedido.producto}</div>
                <div className="w-1/6">{pedido.monto}</div>
                <div className="w-1/4">{pedido.fechaHora}</div>
                <div className="w-1/6">{pedido.estado}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Dashboard = () => {
  return (
    <div className="font-roboto font-bold w-full min-h-screen bg-[#E1DDDD]">
      <div className="p-10 text-[#687287] ">
        <div className="border flex justify-between items-center px-7 py-0 my-1 bg-[#F7F7F7] rounded-2xl">
          <input
            type="text"
            placeholder="Buscar producto, mezcal, etc."
            className="border-2 rounded-3xl p-2 w-2/3"
          />
          <div className="flex items-center ">
            <div className="relative w-full h-full p-10">
              <Image
                src="/Images/mezcaleras.ico"
                alt="search"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="py-10 px-5">
              <p className=" text-gray-700">Mujeres Mezcaleras</p>
              <p className="font-semibold text-gray-500">Administrador</p>
            </div>
            <div className="items-center text-3xl text-gray-900">
              <p>...</p>
            </div>
          </div>
        </div>
        <div className="border flex justify-between items-center p-7 my-1 bg-[#F7F7F7] rounded-2xl">
          <div className="items-start flex flex-col ">
            <p className="text-2xl text-[#020510]">Descripción general</p>
            <p className="text-md">
              Monitoriza el progreso de tu tienda para aumentar tus ventas
            </p>
          </div>
          <div className="flex">
            <div className="border-2 p-4 rounded-xl ">Seleccionar fecha</div>
            <div className="border-2 p-4 rounded-xl  items-center text-white bg-data-cherry-500">
              Exportar
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center  my-1 h-20">
          <div className="flex border bg-[#F7F7F7] rounded-2xl w-full h-full px-3 items-center">
            <div className="relative h-1/2 w-1/2 ">
              <Image
                src="/Images/dashboard.svg"
                alt = ""
                layout="fill"
                objectFit="contain"
                className="dark:invert "
              />
            </div>
            <div>
              <div>
                <p>Ventas totales</p>
              </div>
              <div className="flex">
                <p>12,323 </p>
                <p className="text-lime-400"> ⇱ 12.04%</p>
              </div>
            </div>
          </div>
          <div className="flex border bg-[#F7F7F7] rounded-2xl w-full h-full px-3 items-center">
            <div className="relative h-1/2 w-1/2 ">
              <Image
                src="/Images/mezcaleras.svg"
                alt = ""
                layout="fill"
                objectFit="contain"
                className="dark:invert "
              />
            </div>
            <div>
              <div>
                <p>Clientes</p>
              </div>
              <div className="flex">
                <p>2,323 </p>
                <p className="text-red-400"> ⇲ 12.04%</p>
              </div>
            </div>
          </div>
          <div className="flex border bg-[#F7F7F7] rounded-2xl w-full h-full px-3 items-center">
            <div className="relative h-1/2 w-1/2 ">
              <Image
                src="/Images/pedidos.svg"
                layout="fill"
                alt = ""
                objectFit="contain"
                className="dark:invert "
              />
            </div>
            <div>
              <div>
                <p>Ventas totales</p>
              </div>
              <div className="flex">
                <p>12,323 </p>
                <p className="text-lime-400"> ⇱ 12.04%</p>
              </div>
            </div>
          </div>
          <div className="flex border bg-[#F7F7F7] rounded-2xl w-full h-full px-3 items-center">
            <div className="relative h-1/2 w-1/2 ">
              <Image
                src="/Images/money.svg"
                alt = ""
                layout="fill"
                objectFit="contain"
                className=""
              />
            </div>
            <div>
              <div>
                <p>Ganancias</p>
              </div>
              <div className="flex">
                <p>12,323 </p>
                <p className="text-lime-400"> ⇱ 12.04%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-2/3 h-[28rem] border bg-[#F7F7F7] rounded-2xl p-7 my-1 items-center">
            <p className="text-2xl text-[#020510]">Informe de Ingresos</p>
            <div className="relative h-4/5 w-full">
              <Image
                src="/dashboard/grafica2.png"
                alt = ""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="w-1/3 h-[28rem] border bg-[#F7F7F7] rounded-2xl p-7 my-1 items-center">
            <div className="relative h-4/5 w-full">
              <Image
                src="/dashboard/grafica3.png"
                alt = ""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-2/3 h-[28rem] border bg-[#F7F7F7] rounded-2xl p-7 my-1 items-center">
            <p className="text-2xl text-[#020510]">Transacciones recientes</p>
            <Pedidos />
          </div>
          <div className="w-1/3 h-[28rem] border bg-[#F7F7F7] rounded-2xl p-4 my-1 items-center">
            <p className="text-2xl text-[#020510]">Productos populares</p>
            <div className="flex w-full h-1/6 items-center my-2 justify-evenly rounded-3xl border-2">
              <div className="relative h-full w-full m-2 ">
                <Image
                  src="/Images/Mezcales/1.png"
                  alt = ""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className=" w-full">
                <p className="text-gray-600">Mezcal Armonía Espadín</p>
                <p className="text-sm text-gray-400 ">Item: ARM-213</p>
              </div>
              <div className="px-2">
                <p>$1,242.00</p>
              </div>
            </div>
            <div className="flex w-full h-1/6 items-center my-2 justify-evenly rounded-3xl border-2">
              <div className="relative h-full w-full m-2 ">
                <Image
                  src="/Images/Mezcales/2.png"
                  alt = ""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className=" w-full">
                <p className="text-gray-600">Mezcal 459</p>
                <p className="text-sm text-gray-400 ">Item: ARM-213</p>
              </div>
              <div className="px-2">
                <p>$1,242.00</p>
              </div>
            </div>
            <div className="flex w-full h-1/6 items-center my-2 justify-evenly rounded-3xl border-2">
              <div className="relative h-full w-full m-2 ">
                <Image
                  src="/Images/Mezcales/3.png"
                  alt = ""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className=" w-full">
                <p className="text-gray-600">Mezcal Armonía Espadín</p>
                <p className="text-sm text-gray-400 ">Item: ARM-213</p>
              </div>
              <div className="px-2">
                <p>$1,242.00</p>
              </div>
            </div>
            <div className="flex w-full h-1/6 items-center my-2 justify-evenly rounded-3xl border-2">
              <div className="relative h-full w-full m-2 ">
                <Image
                  src="/Images/Mezcales/4.png"
                  alt = ""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className=" w-full">
                <p className="text-gray-600">Mezcal Cielo Nocturno</p>
                <p className="text-sm text-gray-400 ">Item: ARM-213</p>
              </div>
              <div className="px-2">
                <p>$1,242.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
