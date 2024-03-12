import React from 'react'
import { Button } from '../components/Button'
import { Toaster, toast } from 'sonner'

export function NewMeeeting() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
      <div className="space-y-6 mb-12">
        <div className="flex  justify-end ">
          <div className="max-w-[200px]">
            <Button title="Minhas Reuniões" />
          </div>
        </div>
        <div className="h-px bg-slate-700" />
      </div>

      <div className="w-full flex justify-center">
        <form className="w-full space-y-6">
          {' '}
          <input
            className="w-full bg-transparent text-lg lg:text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none border border-slate-700 py-5 px-2"
            type="text"
            placeholder="Nome"
            onChange={() => {}}
          />
          <input
            className="w-full bg-transparent text-lg lg:text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none border border-slate-700 py-5 px-2"
            type="text"
            placeholder="Email"
            onChange={() => {}}
          />
          <input
            className="w-full bg-transparent text-lg lg:text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none border border-slate-700 py-5 px-2"
            type="text"
            placeholder="Nome da Reunião"
            onChange={() => {}}
          />
          <div>
            <p className="text-lg  font-semibold tracking-tight">
              Data da reunião
            </p>
            <input
              type="date"
              className=" w-full md:w-72  bg-transparent text-lg lg:text-3xl font-semibold tracking-tight  outline-none border border-slate-700 py-5 px-2 "
            />
          </div>
          <div className="space-y-6 mb-12">
            <div className="h-px bg-slate-700" />
            <div className="flex  justify-end ">
              <div className="w-full lg:max-w-[200px]">
                <Button
                  title="Enviar"
                  onClick={() => {
                    toast.success('Nota criada com sucesso!')
                  }}
                />
              </div>
            </div>
          </div>
        </form>
        {/* <div>
          <Toaster />
          <button onClick={() => toast('My first toast')}>
            Give me a toast
          </button>
        </div> */}
      </div>
    </div>
  )
}
