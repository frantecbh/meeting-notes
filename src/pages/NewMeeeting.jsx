import React from 'react'
import { Button } from '../components/Button'

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

      <div className="w-full flex justify-center ">
        <form className="w-full space-y-6">
          {' '}
          <input
            className="w-full bg-transparent text-lg lg:text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none border border-slate-700 py-5 px-2"
            type="text"
            placeholder="Informe seu nome"
            onChange={() => {}}
          />
          <input
            className="w-full bg-transparent text-lg lg:text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none border border-slate-700 py-5 px-2"
            type="text"
            placeholder="Informe seu Email"
            onChange={() => {}}
          />
          <input
            className="w-full bg-transparent text-lg lg:text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none border border-slate-700 py-5 px-2"
            type="text"
            placeholder="Nome da Reunião"
            onChange={() => {}}
          />
          <div className="space-y-6 mb-12">
            <div className="h-px bg-slate-700" />
            <div className="flex  justify-end ">
              <div className="w-full lg:max-w-[200px]">
                <Button title="Enviar" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
