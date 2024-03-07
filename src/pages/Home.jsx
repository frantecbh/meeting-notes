import { Button } from '../components/Button'

export const Home = () => {
  return (
    <div className="h-screen w-full bg-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-[auto_600px] h-screen">
        <div className="flex-1 bg-[url('./public/background.jpg')] bg-no-repeat bg-center bg-cover"></div>
        <div className="lg:px-28 px-6 flex flex-col justify-center space-y-10 max-w-2xl">
          <div className="space-y-1">
            <p className="text-base font-semibold  text-lime-200">
              Gerencie sua lista de presença.
            </p>
            <h1 className="text-5xl font-extrabold text-green-700">
              Meeting Notes
            </h1>
          </div>

          <p className="text-sm font-light">
            Criar uma reunião nunca foi tão simples. Com alguns cliques, você
            pode definir datas, horários e convidar participantes.
          </p>
          <div className="flex gap-2">
            <Button title="Criar Reuniao" />
            <Button title="Minhas Reunioes" />
          </div>
        </div>
      </div>
    </div>
  )
}
