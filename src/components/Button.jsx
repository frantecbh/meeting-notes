export const Button = ({ title, loading = false, ...rest }) => {
  return (
    <button
      type="button"
      {...rest}
      disabled={loading}
      className="w-full bg-green-800 hover:bg-green-900 text-gray-200 h-14 px-4 mt-2 rounded-lg font-medium disabled:opacity-75 transition-all "
    >
      {loading ? 'Carregando...' : title}
    </button>
  )
}
