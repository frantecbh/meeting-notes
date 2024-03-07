import { Button } from '../components/Button'

export const Dashboard = () => {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
      <div className="flex max-w-md gap-2">
        <Button title="Nova Meeting" />
        <Button title="Minhas Meetting" />
      </div>
    </div>
  )
}
