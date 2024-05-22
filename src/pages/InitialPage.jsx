import { Link } from 'react-router-dom'
import { Lines, Image } from '../assets/InitialPageAssets'

const InitialPage = () => {
  return (
    <div className='relative flex h-full w-full flex-col items-center'>
      <div className='absolute top-[315px] z-10'>
        <Lines />
      </div>
      <div className='flex flex-col gap-[50px]'>
        <div className='mt-[85px] flex items-center justify-center'>
          <Image />
        </div>
        <div className='z-20 flex flex-col items-center justify-center gap-[250px]'>
          <div className='flex flex-col gap-5'>
            <p className='text-banap-dark text-center text-[22px] font-extrabold'>
              Pronto para começar?
            </p>
            <p className='font-regular text-banap-dark text-center text-base'>
              Este pequeno ‘tutorial’ é apenas uma<br></br>curta demonstração do
              que nosso<br></br>
              sistema tem a oferecer.<br></br>Ainda há muito mais por vir!
            </p>
          </div>
          <div className='flex flex-col gap-5'>
            <Link to='/register'>
              <button className='bg-banap-light h-[38px] w-[243px] rounded-md text-sm font-extrabold text-white'>
                Cadastrar-se
              </button>
            </Link>
            <Link to='/login'>
              <button className='border-banap-light/30 text-banap-light h-[38px] w-[243px] rounded-md border-2 bg-white text-sm font-extrabold'>
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
