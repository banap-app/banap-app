import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import {
  UpperLines,
  LowerLines,
  UpperBubbles,
  LowerBubbles,
} from '../assets/LoginAssets'

const LoginPage = () => {
  const navigate = useNavigate()

  return (
    <div className='relative flex h-full w-full flex-col items-center'>
      <div className='absolute right-0 top-[-4px]'>
        <UpperLines />
      </div>
      <div className='absolute bottom-0 left-0'>
        <LowerLines />
      </div>
      <div className='absolute right-[7px] top-[158px]'>
        <UpperBubbles />
      </div>
      <div className='absolute bottom-[222px] left-[46px]'>
        <LowerBubbles />
      </div>
      <div
        onClick={() => navigate(-1)}
        className='absolute left-[30px] top-[40px]'
      >
        <ArrowLeft />
      </div>
      <div className='mt-[140px] flex flex-col items-center gap-10'>
        <div className='flex flex-col gap-10'>
          <p className='text-banap-dark text-center text-[32px] font-extrabold'>
            Banap
          </p>
          <p className='font-regular text-banap-dark text-center text-xl'>
            Entre com sua<br></br>conta!
          </p>
        </div>
        <form>
          <div className='h-auto w-[244px]'>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col gap-2.5'>
                <label htmlFor='email' className='text-xl font-light'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Insira o seu email'
                  autoComplete='email'
                  required
                  className='font-regular text-banap-dark placeholder:text-banap-dark/75 w-[243px] border-b-[1px] border-black/30 pb-[5px] text-sm outline-none'
                />
              </div>
              <div className='flex flex-col gap-2.5'>
                <label htmlFor='password' className='text-xl font-light'>
                  Senha
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Insira a sua senha'
                  autoComplete='current-password'
                  required
                  className='font-regular text-banap-dark placeholder:text-banap-dark/75 w-[243px] border-b-[1px] border-black/30 pb-[5px] text-sm outline-none'
                />
              </div>
            </div>
            <p className='text-banap-dark mt-[5px] text-right text-sm font-medium'>
              Esqueceu sua senha?
            </p>
            <button
              type='submit'
              className='bg-banap-light mt-[15px] h-[38px] w-[243px] rounded-md text-sm font-extrabold text-white'
            >
              Entrar
            </button>
            <p className='mt-2.5 text-center text-sm font-medium'>
              Não possui uma conta?{' '}
              <Link to='/register'>
                <span className='text-banap-dark'>Crie uma.</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage