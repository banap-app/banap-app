import { Link } from 'react-router-dom'
import { InitialPageLines, InitialPageImage } from '../assets/PagesAssets'

const InitialPage = () => {
  return (
    <div className='relative flex h-full w-full flex-col items-center'>
      <div className='absolute top-[315px] z-10'>
        <InitialPageLines />
      </div>
      <div className='flex flex-col gap-[50px]'>
        <div className='mt-[85px] flex items-center justify-center'>
          <InitialPageImage />
        </div>
        <div className='z-20 flex flex-col items-center justify-center gap-[250px]'>
          <div className='flex flex-col gap-5'>
            <p className='text-center text-[22px] font-extrabold text-banap-dark'>
              Pronto para começar?
            </p>
            <p className='font-regular text-center text-base text-banap-dark'>
              Este pequeno ‘tutorial’ é apenas uma<br></br>curta demonstração do
              que nosso<br></br>
              sistema tem a oferecer.<br></br>Ainda há muito mais por vir!
            </p>
          </div>
          <div className='flex flex-col gap-5'>
            <Link to='/register'>
              <button className='h-[38px] w-[243px] rounded-md bg-banap-light text-sm font-extrabold text-white'>
                Cadastrar-se
              </button>
            </Link>
            <Link to='/login'>
              <button className='h-[38px] w-[243px] rounded-md border-2 border-banap-light/30 bg-white text-sm font-extrabold text-banap-light'>
                Logar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InitialPage
