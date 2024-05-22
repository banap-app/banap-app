import { Link } from 'react-router-dom'

function App() {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-[250px]'>
        <div className='flex flex-col gap-5'>
          <p className='text-center text-[22px] font-extrabold text-[#1a5d1a]'>
            Pronto para começar?
          </p>
          <p className='font-regular text-center text-base text-[#1a5d1a]'>
            Este pequeno ‘tutorial’ é apenas uma<br></br>curta demonstração do
            que nosso<br></br>
            sistema tem a oferecer.<br></br>Ainda há muito mais por vir!
          </p>
        </div>
        <div className='flex flex-col gap-5'>
          <Link to='/register'>
            <button className='h-[38px] w-[243px] rounded-md bg-[#1ea81e] text-sm font-extrabold text-white'>
              Cadastrar-se
            </button>
          </Link>
          <Link to='/login'>
            <button className='h-[38px] w-[243px] rounded-md border-2 border-[#1ea81e]/30 bg-white text-sm font-extrabold text-[#1ea81e]'>
              Logar
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default App
