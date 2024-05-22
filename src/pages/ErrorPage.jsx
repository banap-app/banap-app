import { useRouteError } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-5'>
      <h1 className='text-4xl font-extrabold text-[#1a5d1a]'>Oops!</h1>
      <p className='font-regular text-xl'>Um erro inesperado ocorreu.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
