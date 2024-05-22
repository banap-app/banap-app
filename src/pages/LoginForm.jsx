import Frame from '../components/Frame'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

function Login() {
  return (
    <Frame>
      <div className='relative flex h-full w-full flex-col items-center justify-center'>
        <div className='absolute left-[30px] top-[40px]'>
          <Link to='/'>
            <ArrowLeft />
          </Link>
        </div>
        <div className='flex flex-col items-center gap-10'>
          <div className='flex flex-col gap-10'>
            <p className='text-center text-[32px] font-extrabold text-[#1a5d1a]'>
              Banap
            </p>
            <p className='font-regular text-center text-xl text-[#1a5d1a]'>
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
                    className='font-regular w-[243px] border-b-[1px] border-black/30 pb-[5px] text-sm text-[#1a5d1a] outline-none placeholder:text-[#1a5d1a]/75'
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
                    className='font-regular w-[243px] border-b-[1px] border-black/30 pb-[5px] text-sm text-[#1a5d1a] outline-none placeholder:text-[#1a5d1a]/75'
                  />
                </div>
              </div>
              <p className='mt-[5px] text-right text-sm font-medium text-[#1a5d1a]'>
                Esqueceu sua senha?
              </p>
              <button
                type='submit'
                className='mt-[15px] h-[38px] w-[243px] rounded-md bg-[#1ea81e] text-sm font-extrabold text-white'
              >
                Entrar
              </button>
              <p className='mt-2.5 text-center text-sm font-medium'>
                Não possui uma conta?{' '}
                <Link to='/register'>
                  <span className='text-[#1a5d1a]'>Crie uma.</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Frame>
  )
}

export default Login
